import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  
  hidePwdContent: boolean = true;
  registrerForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
      const formData = this.registrerForm.value;
      // Handle registration logic here, e.g., call a service to register the user
      console.log('Registration data:', formData);
    } else {
      console.error('Form is invalid');
    }

    this.registrerForm.reset();
  }

}
