import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { videoModel } from '../model/video';
import { profile_verification } from '../model/profile_verification';

@Injectable({
  providedIn: 'root'
})
export class VideoService {


  urlVideo: String = "http://localhost:8080/poloAnguler/";
  fullUrl: String = '';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.urlVideo + 'getAllUser')
  }

  postUser(obj: videoModel) {
    console.log(this.urlVideo + 'postUser');
    return this.http.post(this.urlVideo + 'postUser', obj)
  }

  updateUser(obj: videoModel) {
    console.log(this.urlVideo + 'update/' + obj.id);
    return this.http.post(this.urlVideo + 'update/' + obj.id, obj)
  }


  deleteUser(obj: videoModel) {
    return this.http.delete(this.urlVideo + 'delete/' + obj.id)
  }

  otpSending(verification: profile_verification) {
    return this.http.post<HttpResponse<any>>(this.urlVideo + 'verify-otp', verification, {
      observe: 'response'
    });
  }

  otpVerification(verification: profile_verification) {
    return this.http.post<HttpResponse<any>>(this.urlVideo + 'verify-otp', verification, {
      observe: 'response'
    });
  }



}
