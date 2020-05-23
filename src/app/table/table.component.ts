import { Component, OnInit } from '@angular/core';
//import { AUTOMOVILES } from '../data';
import { Automovil } from '../models';
import { AutosService } from '../services/autos.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  autos: Automovil[];
  
  constructor(private autoService: AutosService) { }

  ngOnInit(): void {
    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data;
    })
  }

  page = 1;
  pageSize = 4;
  collectionSize = 20;

  get car(): Automovil[]{ //Revisar 
    return this.autos
      .map((car, i) => ({id: i + 1, ...car}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
