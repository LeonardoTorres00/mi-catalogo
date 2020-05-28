import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
import { Automovil } from '../models';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  private autosURL = 'https://catalogo-autos.herokuapp.com/api/autos/limit/100';
  private autosActionURL = 'https://catalogo-autos.herokuapp.com/api/autos';

  constructor(private http: HttpClient, private messagesServices: MessagesService) { }

  //Agregar
  addAuto(auto: Automovil): Observable<any>{
    return this.http.post<any>(this.autosActionURL, auto).pipe(
      catchError(this.handleError<any>('addAuto')),
      tap((result) => {
        console.log(result);
        this.messagesServices.add(`Auto agregado con id: ${result.data._id}`)
      })
    )
  }

  //Mostrar elementos de la API
  getAutos(): Observable<any> {
    return this.http.get<any>(this.autosURL).pipe(
      catchError(this.handleError<any>('getAutos')),
      tap(()=> this.messagesServices.add('Autos obtenidos'))
    )
  }

  //Actualizar  
  updateAutos(auto: Automovil): Observable<any> {
    return this.http.put<any>(`${this.autosActionURL}/${auto._id}`, auto).pipe(
      catchError(this.handleError<any>('addAuto')),
      tap((result) => {
        console.log(result);
        this.messagesServices.add(`Auto editado con id: ${result.data._id}`)
      })
    )

  }

  //Eliminar
  deleteAuto(auto: Automovil): Observable<any> {
    return this.http.delete<any>(`${this.autosActionURL}/${auto._id}`);
  }

  //Método errores
  private handleError<T>(operation = 'operation', result?: T){
    return(error: any): Observable<T> => {
      this.messagesServices.add(`${operation} fallo: ${error.message}`);
      return of(result as T);
    }
  }
}
