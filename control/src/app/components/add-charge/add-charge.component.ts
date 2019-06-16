import { Component, OnInit } from '@angular/core';

import { CrudService } from '../../services/crud.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-charge',
  templateUrl: './add-charge.component.html',
  styleUrls: ['./add-charge.component.sass']
})
export class AddChargeComponent implements OnInit {

  crud = this.parent.crud;

  form = new FormGroup({
    concept: new FormControl('', Validators.required),
    amount: new FormControl('', [Validators.required, Validators.min(0)]),
    user: new FormControl('', Validators.required)
  });

  selectedUsers = [
    1
  ];

  debtors: any = [
    {
      id: 0,
      name: '',
      telephone: ''
    }
  ];

  constructor(private parent: AppComponent, private router: Router) {
  }

  ngOnInit() {

    console.log(this.crud.currentUser);
    if (this.crud.currentUser.logged && this.crud.currentUser.admin) {
      console.log('Logged successfully.');
    } else {
      this.router.navigateByUrl('/login');
    }

    this.crud.getDebtors(null).subscribe(res => {
      this.debtors = res;
    });

    console.log(this.debtors);
  }

  addCharge() {
    const date = new Date();
    const data = {
      concept: this.form.get('concept').value,
      amount: this.form.get('amount').value,
      creationDate: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
      users: this.selectedUsers
    };

    console.log(data);

    this.crud.addCharge(data).subscribe(res => {
      console.log(res);
    });
    this.form.reset();
  }

}
