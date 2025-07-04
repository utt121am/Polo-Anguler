import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink, Routes } from '@angular/router';
import { loginModel } from '../../model/login';
import { SelfProfileComponent } from '../self-profile/self-profile.component';

declare var bootstrap: any;

@Component({
  selector: 'app-profile',
  imports: [FormsModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) { }

  popUp: String = '';

  ngOnInit(): void {
    if (history.state.triggerMethod) {
      this.popUp = " Register Successful";
      this.RegSucPopUp();
    }
  }

  loginObj: loginModel = new loginModel();
  showPassword: boolean = false;

  onLogin(data: NgForm) {
    if (data.valid) {
      console.log("press login button")
      console.log("email : ", this.loginObj.email)
      console.log("password : ", this.loginObj.password)
      // ....pop up
      const toastEl = document.getElementById('loginToast');
      this.popUp = " Login Successful";
      if (toastEl) {
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
        this.printAfter()
      } else {
        console.warn("Toast element not found!");
      }
      // ....pop up
    } else {
      console.log('Form is invalid');
    }
  }

  RegSucPopUp() {
    console.log("onInit is working in the login...");

    const toastEl = document.getElementById('loginToast');
    if (toastEl) {
      const toast = new bootstrap.Toast(toastEl);
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
