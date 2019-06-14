import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API_URI = 'http://localhost:3000'; //DIRECCION DEL SERVIDOR

  constructor(private http: HttpClient) { }

  getlogin(user: User){
    return this.http.get(`${this.API_URI}/login/${user}`);//DIRECCION DE USUARIOS
  }

}