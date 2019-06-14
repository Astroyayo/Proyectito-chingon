import { Component, OnInit, HostBinding } from '@angular/core';

import { CrudService } from '../../services/crud.service';
import { from } from 'rxjs';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private crud: CrudService) { }
  us: any ={
    telephone: '',
    password: '',
  }
  ngOnInit() {
    
  }
  login(){
    this.crud.getlogin(this.us).subscribe(
      res => console.log(res),
      err => console.log(err)      
    );
  }

}
