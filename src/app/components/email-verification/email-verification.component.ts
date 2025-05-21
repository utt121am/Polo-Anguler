import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { interval } from 'rxjs/internal/observable/interval';
import { Subscription } from 'rxjs/internal/Subscription';
import { VideoService } from '../../services/video.service';
import { profile_verification } from '../../model/profile_verification';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';
declare var bootstrap: any;
@Component({
  selector: 'app-email-verification',
  imports: [FormsModule, NgClass],
  templateUrl: './email-verification.component.html',
  styleUrl: './email-verification.component.css'
})
export class EmailVerificationComponent implements OnInit, OnDestroy {

  userData: any;
  verificationCode: string = '';
  timer: number = 60;
  private subscription: Subscription | null = null;

  videoSer: VideoService = inject(VideoService);
  verification: profile_verification = new profile_verification();
  router: Router = inject(Router);
  floatingTitle: string = '';
  floatingBackground: string = '';

  ngOnInit(): void {

    this.userData = history.state.userData;
    console.log('profile Data:', this.userData);

    if (history.state.triggerMethod) {
      this.startTimer();
    }
  }

  startTimer(): void {

    console.log('verification whole userData is : ', this.userData)
    console.log('verification user :', this.userData.name)

    console.log('verification whole verification is : ', this.verification)
    this.verification.email = this.userData.email;
    this.verification.phoneNumber = this.userData.phoneNumber;
    this.verification.uid = this.userData.userId;


    this.subscription = interval(1000).subscribe(() => {
      if (this.timer > 0) {
        this.timer--;
      } else if (this.subscription) {
        this.subscription.unsubscribe();
      }
    });
  }

  verifyCode(): void {

    this.verification.otp = this.verificationCode;

    console.log('Verification Code:', this.verificationCode);
    console.log('Verification otp:', this.verification.otp);

    this.videoSer.otpVerification(this.verification).subscribe(
      (response: HttpResponse<any>) => {
        console.log('Response received:', response);

        if (response.status === 200) {
          console.log('Verification successful...');

          this.router.navigate(['/selfprofile/' + response.body.userId], {
            state: { userData: response.body, triggerMethod: 'registerSuccess' }
          });
        }
      },
      (error: HttpErrorResponse) => {
        this.showPopUp('You Enter Wrong OTP  !', 'bg-danger');
        console.error('Error:', error);
      }
    );
  }

  resendEmail(): void {
    this.verifyEmail();
    console.log('Resend Email Clicked');

  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  verifyEmail() {
    this.showPopUp('OTP sending to ' + this.userData.email + '.....', 'bg-success');

    this.verification.email = this.userData.email;
    this.verification.phoneNumber = this.userData.phoneNumber;
    this.verification.uid = this.userData.userId;

    console.log('verification : ', this.verification);

    this.videoSer.otpSending(this.verification).subscribe(
      (response: HttpResponse<any>) => {
        console.log('Response received:', response);

        if (response.status === 200) {
          console.log('Verification successful, navigating...');
          this.timer = 60;
          this.startTimer();
        }
      },
      (error: HttpErrorResponse) => {
        console.error('Error:', error);
        // this.isVerifying = false; // Re-enable the button if there is an error
      }
    );
  }

  showPopUp(titel: any, background: any) {
    const toastEl = document.getElementById('loginToast');
    this.floatingTitle = titel;
    this.floatingBackground = background;
    const toast = new bootstrap.Toast(toastEl);
    toast.show();

  }

}
