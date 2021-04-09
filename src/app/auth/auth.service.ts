import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface AuthResponseData {
  idtoken: string;
  email: string;
  refreshToken: string;
  expiresin: string;
  localid: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}
  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDRoHmViLfUhx-4JTKPvNRR0uemq2wCCpk',
      { email: email, password: password, returnSecureToken: true }
    );
  }
}
