import { Component, inject } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';
import { registerModel } from '../../model/register';
import { ApicallingService } from '../../services/apicalling.service';
import { Router } from '@angular/router';

// import { ToastService } from '../../services/toast.service'; // Adjust path if needed

declare var bootstrap: any;

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, NgClass, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private router: Router) { }


  rolesList: string[] = [
    'Employee',
    'HR',
    'CEO',
    'Data Analyst / Data Scientist',
    'DevOps Engineer',
    'Software Engineer / Developer',
    'Marketing Manager',
    'Sales Executive / Representative',
    'Supply Chain Manager',
    'UX/UI Designer',
    'Graphic Designer',
    'Product Designer'
  ];

  showPassword = false;
  registerObj: registerModel = new registerModel();
  apiCalling = inject(ApicallingService);

  isLoading = false;
  popUp: any = '';
  popUpBg: any = '';
  disable: any = false;

  checkMinLength(password: any): boolean {
    return password?.length >= 8;
  }

  checkLetter(password: any): boolean {
    return /[A-Za-z]/.test(password);
  }

  checkNumber(password: any): boolean {
    return /\d/.test(password);
  }

  checkSpecialChar(password: any): boolean {
    return /[@$!%*?&]/.test(password);
  }

  checkNoSpace(password: any): boolean {
    return !/\s/.test(password);
  }




  onRegister(form: NgForm) {
    this.isLoading = true;
    if (form.valid) {

      this.apiCalling.postProfile(this.registerObj).subscribe(
        (res: any) => {
          this.allEmptyField()
          this.disable = true;
          console.log('API Response:', res);
          this.popUp = 'Account Created Successfully';
          this.popUpBg = 'text-bg-success';
          this.RegSucPopUp();
          this.isLoading = false;

          // ✅ Redirect to /login after 5 seconds (to show toast)
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);

        },
        (error: any) => {
          console.error('API Error:', error);

          // Handle various possible error structures
          if (error.error && error.error.statusText) {
            this.popUp = error.error.statusText;
          } else if (error.statusText) {
            this.popUp = error.statusText;
          } else {
            this.popUp = 'Something went wrong!';
          }

          this.popUpBg = 'text-bg-danger';
          this.RegSucPopUp();
          this.isLoading = false;
        }
      );
    }
  }

  allEmptyField() {
    this.registerObj.name = '';
    this.registerObj.email = '';
    this.registerObj.password = '';
    this.registerObj.username = '';
    this.registerObj.phoneNumber = '';
    this.registerObj.gender = '';
    this.registerObj.roles = '';
  }


  RegSucPopUp() {
    console.log("onInit is working in the sign up...");
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


  signUpWithGoogle() {
    alert('Google sign-up coming soon!');
  }

  signUpWithGitHub() {
    alert('GitHub sign-up coming soon!');
  }
}
