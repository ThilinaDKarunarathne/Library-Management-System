import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RegisterDto } from '../DTOs/registerDto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http = inject(HttpClient);
  baseUrl: string = "https://localhost:5001/api/Library/"
  
  register(user: RegisterDto){
    console.log("Registering user:", user);
    return this.http.post<string>(this.baseUrl+"register", user);
  }
}