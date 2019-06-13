import { Component, OnInit, HostBinding } from '@angular/core';

import { CrudService } from '../../services/crud.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private crud: CrudService) { }

  ngOnInit() {
    this.crud.getuser().subscribe(
      res => console.log(res),
      err => console.log(err)
      
    );
  }

}
