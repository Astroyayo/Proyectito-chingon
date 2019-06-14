import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { User } from '../models/user';
import { CurrentUser } from '../models/currentUser';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  currentUser: CurrentUser = {
    id: null,
    admin: false,
    logged: false
  }

  API_URI = 'http://localhost:3000/api/users'; //DIRECCION DEL SERVIDOR

  constructor(private http: HttpClient) { }

  getlogin(user: User): Observable<any>{
    
    return this.http.post(`${this.API_URI}/login/`, user);//DIRECCION DE USUARIOS}
  }

}
