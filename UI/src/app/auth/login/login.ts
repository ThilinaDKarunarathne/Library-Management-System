import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
loginForm: FormGroup;

constructor(private fb: FormBuilder) {
    this.loginForm = fb.group({

    })

  }

}
