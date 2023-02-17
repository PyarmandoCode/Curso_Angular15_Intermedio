import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Disco } from '../models/disco.model';

const baseUrl="https://web-production-eb53.up.railway.app/api/discos/"

@Injectable({
  providedIn: 'root'
})
export class DiscoServiceService {

  constructor(private http:HttpClient) { }
  //Metodo que me permitira Traer todos los discos
  getAll():Observable<Disco[]>{
    return this.http.get<Disco[]>(baseUrl);
  }
  //Metodo para mostrar un Disco por Id y pasarle un Parametro
  get(id:any):Observable<Disco>{
    return this.http.get(`${baseUrl}/${id}`);
  }
  //Metodo Para Crear un Disco
  create(data:any):Observable<any> {
    return this.http.post(baseUrl,data);
  }
  //Metodo Para Actualizar un Disco
  update(id:any,data:any):Observable<any> {
    return this.http.put(`${baseUrl}/${id}`,data);
  }
  //Metodo Para Eliminar un Disco
  delete(id:any):Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }


}
