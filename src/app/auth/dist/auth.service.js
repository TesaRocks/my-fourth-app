"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
//import { HttpClient, HttpErrorResponse } from '@angular/common/http';
var core_1 = require("@angular/core");
var AuthActions = require("./store/auth.actions");
var AuthService = /** @class */ (function () {
    function AuthService(
    //   private http: HttpClient,
    // private router: Router,
    store) {
        this.store = store;
    }
    AuthService.prototype.setLogoutTimer = function (expirationDuration) {
        var _this = this;
        this.tokenExpirationTimer = setTimeout(function () {
            _this.store.dispatch(new AuthActions.Logout());
        }, expirationDuration);
    };
    AuthService.prototype.clearLogoutTimer = function () {
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
            this.tokenExpirationTimer = null;
        }
    };
    AuthService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
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
