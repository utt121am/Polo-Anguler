import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { loginModel } from '../../model/login';
import { registerModel } from '../../model/register';

declare var bootstrap: any;

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [NgClass, FormsModule, CommonModule],
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  loginObj: loginModel = new loginModel();
  registerObj: registerModel = new registerModel();
  showPassword: boolean = false;
  isRegisterMode: boolean = false;
  popUp: string = '';
  isLoading: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (history.state.triggerMethod) {
      this.popUp = 'Register Successful';
      this.showToast();
    }
  }

  onLogin(data: NgForm) {
    if (data.valid) {
      this.isLoading = true;
      console.log('Login:', this.loginObj);
      this.popUp = 'Login Successful';
      this.showToast();
      setTimeout(() => {
        this.router.navigate(['/selfprofile', this.loginObj.email], {
          state: { triggerMethod: true }
        });
        this.isLoading = false;
      }, 1000);
    } else {
      console.log('Login form is invalid');
    }
  }

  onRegister(data: NgForm) {
    if (data.valid) {
      this.isLoading = true;
      console.log('Register:', this.registerObj);
      setTimeout(() => {
        this.router.navigate(['/profile'], {
          state: { triggerMethod: true }
        });
        this.isLoading = false;
      }, 1000);
    } else {
      console.log('Register form is invalid');
    }
  }

  toggleMode(register: boolean) {
    this.isRegisterMode = register;
  }

  showToast() {
    const toastEl = document.getElementById('loginToast');
    if (toastEl) {
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    } else {
      console.warn('Toast element not found!');
    }
  }
}