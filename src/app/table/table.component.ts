import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import { AutosService } from '../services/autos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddUpdateComponent } from '../modals/modals-add-update/modal-add-update.component';
import { ModalConfirmActionComponent } from '../modals/modal-confirm-action/modal-confirm-action.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  autos: Automovil[];
  page: number;
  pageSize: number;
  displayProgressBar: boolean;

  constructor(private autoService: AutosService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.displayProgressBar = true;
    this.page = 1;
    this.pageSize = 10;
    this.autoService.getAutos().subscribe((response) => {
      setTimeout(() => {
        this.displayProgressBar = false;
        this.autos = response.data;
      }, 1500)
    })
  }

  openModalAgregar(){
    const modalRef = this.modalService.open(ModalAddUpdateComponent, { centered: true });
    modalRef.componentInstance.accion = 'Agregar';
    modalRef.result.then(
      (auto) => {
        this.autoService.addAuto(auto).subscribe(response => console.log(response));
      },
      (response) => {
        console.log(response);
      }
    )
  }

  openModalEditar(auto: Automovil) {
    const modalRef = this.modalService.open(ModalAddUpdateComponent, { centered: true });
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = 'Editar';

    modalRef.result.then(
      (auto) => {
        this.autoService.updateAutos(auto).subscribe(response => console.log(response));
      },
      (reason) => {
        console.log(reason);
      }
    )
  }

  openModalConfirmDelete(auto: Automovil) {
    const modalRef = this.modalService.open(ModalConfirmActionComponent, { centered: true })
    modalRef.componentInstance.auto = auto;
    modalRef.result.then(
      (autoTemp) => {
        this.autoService.deleteAuto(autoTemp).subscribe(response => {
          console.log("Se elimino")
          console.log(response)
        })
      },
      (reason) => {
        console.log(reason)
      }
    )
  }

}
