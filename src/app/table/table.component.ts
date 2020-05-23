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
  page = 4;
  pageSize = 10;
  
  constructor(private autoService: AutosService) { }

  ngOnInit(): void {
    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data;
    })
  }
}
