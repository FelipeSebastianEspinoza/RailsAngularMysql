import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usuario = {};
  private URL = 'http://localhost:3000';
  constructor(private http: HttpClient, private router: Router) {}

  signUp(user) {
    this.usuario = {
      user: {
        email: user.email,
        password: user.password,
      },
    };
    return this.http.post<any>(this.URL + '/signup', this.usuario);
  }
  signIn(user) {
    this.usuario = {
      user: {
        email: user.email,
        password: user.password,
      },
    };
    return this.http.post<any>(this.URL + '/login', this.usuario);
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }
}
