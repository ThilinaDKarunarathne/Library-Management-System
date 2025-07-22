import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Register } from './register/register';
import { Login } from './login/login';
import { SharedModule } from '../shared/shared-module';



@NgModule({
  declarations: [
    Register,
    Login
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AuthModule { }
