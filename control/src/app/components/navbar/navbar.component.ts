import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor(crud: CrudService) { }

  ngOnInit() {
  }

}
