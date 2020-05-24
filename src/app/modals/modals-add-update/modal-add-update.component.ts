import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from 'src/app/models';

@Component({
  selector: 'app-modal-add-update',
  templateUrl: './modal-add-update.component.html',
  styleUrls: ['./modal-add-update.component.css']
})
export class ModalAddUpdateComponent {

  //Agregar- Editar
  accion: String;
  auto: Automovil = {} as Automovil;

  constructor(public activeModal: NgbActiveModal) { }

}
