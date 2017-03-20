import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterCompontent } from './register/register.component';
import { LoginCompontent } from './login/login.component';
import {RegisterService} from './register/register.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterCompontent,
    LoginCompontent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
