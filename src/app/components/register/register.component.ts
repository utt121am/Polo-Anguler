import { Component } from '@angular/core';
import { registerModel } from '../../model/register';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private router: Router) { }

  showPassword: boolean = false;

  registerObj: registerModel = new registerModel();

  onRegister(data: NgForm) {

    if (data.valid) {
      this.router.navigate(['/profile'], {
        state: { triggerMethod: true }
      });


    } else {
      console.log('Form is invalid');
    }
  }

}
