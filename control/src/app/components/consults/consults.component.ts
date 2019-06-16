import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-consults',
  templateUrl: './consults.component.html',
  styleUrls: ['./consults.component.sass']
})
export class ConsultsComponent implements OnInit {

  form = new FormGroup({
    type: new FormControl('', Validators.required)
  });

  formUser = new FormGroup({
    user: new FormControl('', Validators.required)
  });

  formDate = new FormGroup({
    date: new FormControl('', Validators.required)
  });

  date: boolean;
  user: boolean;

  crud = this.parent.crud;

  constructor(private parent: AppComponent, private router: Router) { }

  ngOnInit() {

    console.log(this.crud.currentUser);
    if (this.crud.currentUser.logged && this.crud.currentUser.admin) {
      console.log('Logged successfully.');
    } else {
      this.router.navigateByUrl('/login');
    }

  }

  getByUser() {

  }

  getByDate() {

  }

}
