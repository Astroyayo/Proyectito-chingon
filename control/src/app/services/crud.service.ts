import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API_URI = ''; //DIRECCION DEL SERVIDOR

  constructor(private http: HttpClient) { }

  getuser(){
    return this.http.get(`${this.API_URI}/`)//DIRECCION DE USUARIOS
  }

}
