import { Component, OnInit, HostBinding } from '@angular/core';

import { CrudService } from '../../services/crud.service';
import { from } from 'rxjs';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers: [CrudService],
})
export class LoginComponent implements OnInit {

  constructor(private crud: CrudService) { }
  us: User ={
    telephone: '',
    password: '',
  }
  ngOnInit() {
    
  }
  login(){
    console.log(this.us)
    this.crud.getlogin(this.us).subscribe(
      res => console.log(res),
      err => console.log(err)      
    );
  }

}
