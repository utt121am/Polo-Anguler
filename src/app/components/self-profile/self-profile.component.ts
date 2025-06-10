import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
declare var bootstrap: any;

interface RegisterData {
  phoneNumber: any;
  name: string;
  email: string;
  username: string;
  password: string;
  gender: string;
  role: String;
}

@Component({
  selector: 'app-self-profile',
  imports: [FormsModule, NgClass, CommonModule, FormsModule, CommonModule, NgClass, FormsModule, CommonModule],
  templateUrl: './self-profile.component.html',
  styleUrl: './self-profile.component.css'
})
export class SelfProfileComponent {

  registerObj: RegisterData = {
    name: '',
    email: '',
    username: '',
    password: '',
    gender: '',
    phoneNumber: '',
    role: ''
  };

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

  showPassword: boolean = false;
  popUp: any;

  constructor(private router: Router) { }

  onRegister(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted:', this.registerObj);
      // Implement registration logic here (e.g., API call)
      this.router.navigate(['/login']);
    }
  }

  signUpWithGoogle() {
    console.log('Sign up with Google');
    // Implement Google OAuth logic here
  }

  signUpWithGitHub() {
    console.log('Sign up with GitHub');
    // Implement GitHub OAuth logic here
  }
}
