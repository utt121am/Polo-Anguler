import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PasswordUpdateModel } from '../../model/password_Update';

@Component({
  selector: 'app-password-change',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent {

  passwordUpdateObj = inject(PasswordUpdateModel);

  currentPassword: string = '';
  newPassword: string = '';
  userData: any;

  ngOnInit(): void {
    this.userData = history.state.userData;
    console.log('Password change profile Data:', this.userData);

    if (history.state.triggerMethod) {
      console.log('yes');
    }
  }

  onSubmit(form: NgForm) {
    console.log('Current Password:', this.currentPassword);
    console.log('New Password:', this.newPassword);
    console.log('Form Object:', form);
    console.log('Form Value:', form.value);

    this.passwordUpdateObj.uid = this.userData?.uid;
    this.passwordUpdateObj.currentPassword = form.value.currentPassword;
    this.passwordUpdateObj.newPassword = form.value.newPassword;
    this.passwordUpdateObj.confirmPassword = form.value.confirmPassword;

    console.log('Password Update Object:', this.passwordUpdateObj);
  }
}
