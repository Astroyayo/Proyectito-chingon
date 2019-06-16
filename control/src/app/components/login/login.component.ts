import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  crud = this.parent.crud;

  constructor(
    private router: Router,
    private parent: AppComponent) { }

  us: User = {
    telephone: '',
    password: '',
  };

  ngOnInit() {

  }
  login(form: NgForm) {
    this.crud.getlogin(this.us).subscribe(
      res => {
        this.crud.currentUser = res;
        console.log(this.crud.currentUser);
        if (this.crud.currentUser.logged === false) {
          alert('Usuario o contraseña incorrectos!!!');
        } else {
          if (this.crud.currentUser.admin === true) {
            form.reset();
            this.router.navigateByUrl('/admin');
          } else {
            form.reset();
            this.router.navigateByUrl('/user');
          }
        }
      },
      err => console.log(err)
    );
  }

}
