import { CommonModule, NgClass } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink, Routes } from '@angular/router';
import { loginModel } from '../../model/login';

declare var bootstrap: any;

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule, CommonModule, NgClass, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginWithGoogle() {
    alert('Google sign-up coming soon!');
  }

  loginGitHub() {
    alert('GitHub sign-up coming soon!');
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (history.state.triggerMethod) {
      // this.popUp = " Register Successful";
      // this.loginSucPopUp();
    }
  }

  loginObj: loginModel = new loginModel();
  showPassword: boolean = false;

  popUp: any = '';
  popUpBg: any = ' text-bg-danger';

  onLogin(data: NgForm) {
    if (data.valid) {
      console.log("press login button")
      console.log("username : ", this.loginObj.username)
      console.log("password : ", this.loginObj.password)
      this, this.loginSucPopUp('Login success', 'text-bg-success');
    } else {
      console.log('Form is invalid');
    }
  }

  loginSucPopUp(popUp: String, popUpBg: String) {
    this.popUp = popUp;
    this.popUpBg = popUpBg;
    const toastEl = document.getElementById('loginToast');
    if (toastEl) {
      const toast = new bootstrap.Toast(toastEl, {
        delay: 2000,     // 👈 Set delay to 5 seconds
        autohide: true
      });
      toast.show();
    } else {
      console.warn("Toast element not found!");
    }
  }

  printAfter() {
    console.log(".....i love you...");
    const studentId: number = 1234;
    this.router.navigate(['/selfprofile', studentId], {
      state: { triggerMethod: true }
    });
  }

}
