import { Component, OnInit, HostBinding } from '@angular/core';

import { CrudService } from '../../services/crud.service';
import { from } from 'rxjs';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';
import { CurrentUser } from 'src/app/models/currentUser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers: [CrudService],
})
export class LoginComponent implements OnInit {

  constructor(
    private crud: CrudService,
    private router: Router) { }
  us: User ={
    telephone: '',
    password: '',
  }
  
  ngOnInit() {
    
  }
  login(){
    this.crud.getlogin(this.us).subscribe(
      res => {
        this.crud.currentUser = res;
        if(this.crud.currentUser.logged == false){
          alert('Usuario o contraseña incorrectos!!!');
        }
        else{
          this.router.navigateByUrl('/show');
          //window.location.href = './show'
        }
      },
      err => console.log(err)      
    );
  }

}
