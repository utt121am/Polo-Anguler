import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  imports: [NgClass],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.css'
})
export class EditProfileComponent {
  isRegisterMode: any;
  toggleMode(arg0: boolean) {
    throw new Error('Method not implemented.');
  }

}
