import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usuario = {};
  private URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  signUp(user) {
    this.usuario = {
      user: {
        email: user.email,
        password: user.password,
      },
    };
 
     return this.http.post<any>(this.URL + '/login', this.usuario)  
  }
}
