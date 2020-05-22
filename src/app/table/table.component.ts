import { Component, OnInit } from '@angular/core';
import { AUTOMOVILES } from '../data';
import { Automovil } from '../models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  page = 1;
  pageSize = 4;
  collectionSize = AUTOMOVILES.length;

  get autos(): Automovil[] {
    return AUTOMOVILES
      .map((autos, i) => ({id: i + 1, ...autos}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
