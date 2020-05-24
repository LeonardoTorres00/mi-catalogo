import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Automovil } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  private autosURL = 'https://catalogo-autos.herokuapp.com/api/autos/limit/100';
  private autosActionURL = 'https://catalogo-autos.herokuapp.com/api/autos';

  constructor(private http: HttpClient) { }

  //Agregar
  addAuto(auto: Automovil): Observable<any>{
    return this.http.post<any>(this.autosActionURL, auto);
  }

  //Mostrar elementos de la API
  getAutos(): Observable<any> {
    return this.http.get<any>(this.autosURL);
  }

  //Actualizar
  updateAutos(auto: Automovil): Observable<any> {
    return this.http.put<any>(`${this.autosActionURL}/${auto._id}`, auto);
  }

  //Eliminar
  deleteAuto(auto: Automovil): Observable<any> {
    return this.http.delete<any>(`${this.autosActionURL}/${auto._id}`);
  }
}
