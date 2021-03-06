//import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Router } from '@angular/router';
import { BehaviorSubject, throwError } from 'rxjs';
//import { catchError, tap } from 'rxjs/operators';
//import { environment } from '../../environments/environment';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';

@Injectable({ providedIn: 'root' })
export class AuthService {
  //  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;
  constructor(
    //   private http: HttpClient,
    // private router: Router,
    private store: Store<fromApp.AppState>
  ) {}

  setLogoutTimer(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.store.dispatch(new AuthActions.Logout());
    }, expirationDuration);
  }
  clearLogoutTimer() {
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
      this.tokenExpirationTimer = null;
    }
  }
}

// signup(email: string, password: string) {
//   return this.http
//     .post<AuthResponseData>(
//       'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
//         environment.firebaseApiKey,
//       { email: email, password: password, returnSecureToken: true }
//     )
//     .pipe(
//       catchError(this.handleError),
//       tap((resData) => {
//         this.handleAuthentication(
//           resData.email,
//           resData.localId,
//           resData.idToken,
//           +resData.expiresIn
//         );
//       })
//     );
// }
// login(email: string, password: string) {
//   return this.http
//     .post<AuthResponseData>(
//       'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key= ' +
//         environment.firebaseApiKey,
//       { email: email, password: password, returnSecureToken: true }
//     )
//     .pipe(
//       catchError(this.handleError),
//       tap((resData) => {
//         this.handleAuthentication(
//           resData.email,
//           resData.localId,
//           resData.idToken,
//           +resData.expiresIn
//         );
//       })
//     );
// }
// autoLogin() {
//   const userData: {
//     email: string;
//     id: string;
//     _token: string;
//     _tokenExpirationDate: string;
//   } = JSON.parse(localStorage.getItem('userData'));
//   if (!userData) {
//     return;
//   }
//   const loadedUser = new User(
//     userData.email,
//     userData.id,
//     userData._token,
//     new Date(userData._tokenExpirationDate)
//   );
//   if (loadedUser.token) {
//     //this.user.next(loadedUser);
//     this.store.dispatch(
//       new AuthActions.AuthenticateSuccess({
//         email: loadedUser.email,
//         userId: loadedUser.id,
//         token: loadedUser.token,
//         expirationDate: new Date(userData._tokenExpirationDate),
//       })
//     );
//     const expirationDuration =
//       new Date(userData._tokenExpirationDate).getTime() -
//       new Date().getTime();
//     this.autoLogout(expirationDuration);
//   }
// }
// logout() {
//   //this.user.next(null);
//   //this.store.dispatch(new AuthActions.Logout());
//   //this.router.navigate(['/auth']);
//   // localStorage.removeItem('userData');
//   if (this.tokenExpirationTimer) {
//     clearTimeout(this.tokenExpirationTimer);
//   }
//   this.tokenExpirationTimer = null;
// }
// private handleAuthentication(
//   email: string,
//   userId: string,
//   token: string,
//   expiresin: number
// ) {
//   const expirationDate = new Date(new Date().getTime() + expiresin * 1000);
//   const user = new User(email, userId, token, expirationDate);
//   //this.user.next(user);
//   this.store.dispatch(
//     new AuthActions.AuthenticateSuccess({
//       email: email,
//       userId: userId,
//       token: token,
//       expirationDate: expirationDate,
//     })
//   );
//   this.autoLogout(expiresin * 1000);
//   localStorage.setItem('userData', JSON.stringify(user));
// }
// private handleError(errorRes: HttpErrorResponse) {
//   let errorMessage = 'an unknown error';
//   if (!errorRes.error || !errorRes.error.error) {
//     return throwError(errorMessage);
//   }
//   switch (errorRes.error.error.message) {
//     case 'EMAIL_EXISTS':
//       errorMessage = 'This email is in use';
//       break;
//     case 'EMAIL_NOT_FOUND':
//       errorMessage = 'not found email';
//       break;
//     case 'INVALID_PASSWORD':
//       errorMessage = 'invalid pass';
//       break;
//   }
//   return throwError(errorMessage);
// }

//autoLogout(expirationDuration: number) {
//   this.tokenExpirationTimer = setTimeout(() => {
//     this.logout();
//   }, expirationDuration);
// }
