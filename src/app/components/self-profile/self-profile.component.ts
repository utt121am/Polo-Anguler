import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var bootstrap: any;
@Component({
  selector: 'app-self-profile',
  imports: [],
  templateUrl: './self-profile.component.html',
  styleUrl: './self-profile.component.css'
})
export class SelfProfileComponent {

  ngOnInit(): void {
    if (history.state.triggerMethod) {
      this.popUp = " Login Successful";
      this.LoginPopUp();
    }
  }

  popUp: String = '';
  studentId: any = '';

  iAmOk(studentId: any) {
    console.log("hi polo : ", studentId)
  }

  LoginPopUp() {
    console.log("onInit is working in the login...");
    const toastEl = document.getElementById('loginToast');
    if (toastEl) {
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    } else {
      console.warn("Toast element not found!");
    }
  }
}
