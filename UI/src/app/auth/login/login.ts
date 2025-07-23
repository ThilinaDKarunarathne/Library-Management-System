import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthModule } from '../auth-module';
import { SharedModule } from '../../shared/shared-module';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    AuthModule,
    SharedModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  loginForm: FormGroup;
  hidePassword: boolean = true;
  
  constructor(private fb: FormBuilder) {
    this.loginForm = fb.group({
       email: fb.control('', [Validators.required]),
      password: fb.control('', [Validators.required]),
    })
    
  }


  login() {
  throw new Error('Method not implemented.');
  }

}
