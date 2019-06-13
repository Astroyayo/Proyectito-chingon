import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ComunicationComponent } from './components/comunication/comunication.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { AddPaymentComponent } from './component/add-payment/add-payment.component';
import { AddChargeComponent } from './component/add-charge/add-charge.component';

import {CrudService} from './services/crud.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ComunicationComponent,
    AddUserComponent,
    AddPaymentComponent,
    AddChargeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CrudService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
