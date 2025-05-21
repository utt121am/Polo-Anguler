import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};


// .............
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    console.log("................i am in.....")
    const isLoggedIn = !!localStorage.getItem('token'); // or use a proper AuthService
    if (isLoggedIn) {
      console.log("i am in if...")
      return true;
    }

    else {
      console.log("i am in else...")
      this.router.navigate(['/profile']); // redirect to login page
      return false;
    }
  }
}
