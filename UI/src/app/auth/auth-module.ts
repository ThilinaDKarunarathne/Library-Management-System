import { NgModule } from '@angular/core';
import { Register } from './register/register';
import { SharedModule } from '../shared/shared-module';



@NgModule({
  declarations: [
    Register
  ],
  imports: [
    SharedModule,

  ]
})
export class AuthModule { }
