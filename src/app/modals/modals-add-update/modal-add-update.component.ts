import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from 'src/app/models';

@Component({
  selector: 'app-modal-add-update',
  templateUrl: './modal-add-update.component.html',
  styleUrls: ['./modal-add-update.component.css']
})
export class ModalAddUpdateComponent implements OnInit{

  accion: String;
  auto: Automovil = {} as Automovil;
  desde: number;
  hasta: number;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(){

  }

  onSubmit(formAutos){
    let modelos: number[] = this.ensamblajeModelos();
    this.auto.modelos = modelos;
    this.activeModal.close(this.auto);    
  }

  private ensamblajeModelos(): number[] { //Genera el arreglo de modelos.
    let modelos: number[];
    modelos = [];

    for(let cont = this.desde; cont <= this.hasta; cont++) {
      modelos.push(cont);
    }
    return modelos;
  }

}
