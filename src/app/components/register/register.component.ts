import { Component, inject } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';
import { registerModel } from '../../model/register';
import { ApicallingService } from '../../services/apicalling.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, NgClass, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

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
  videoSer = inject(ApicallingService);

  isLoading = false;
  popUp: any;

  onRegister(form: NgForm) {
    if (form.valid) {
      this.isLoading = true;
      console.log(form)
      console.log(this.registerObj)
      // setTimeout(() => {
      //   this.isLoading = false;
      //   alert('Registered Successfully!');
      // }, 2000);
    }
  }

  signUpWithGoogle() {
    alert('Google sign-up coming soon!');
  }

  signUpWithGitHub() {
    alert('GitHub sign-up coming soon!');
  }
}
