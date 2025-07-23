import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../_services/api-service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  
  hidePwdContent: boolean = true;
  registrerForm: FormGroup;

  constructor(private fb: FormBuilder,private service: ApiService, private snackBar: MatSnackBar) {
    this.registrerForm = fb.group({
      firstName: fb.control('', [Validators.required]),
      lastName: fb.control('', [Validators.required]),
      email: fb.control('', [Validators.required, Validators.email]),
      mobileNumber: fb.control('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      password: fb.control('', [Validators.required, Validators.minLength(6)]),
      rpassword: fb.control('', [Validators.required]),
    }
  
  )
  }

  onRegister() {
  if (this.registrerForm.valid) {
    const formData = { ...this.registrerForm.value }; // create a copy
    delete formData.rpassword; // remove rpassword

    this.service.register(formData).subscribe({
      next: (data) => {
        this.snackBar.open(data,"OK")
        this.registrerForm.reset();
      },
      error: (error) => {
        console.error('Error during registration:', error);
      }
    });
  } else {
    console.error('Form is invalid');
  }

}

}
