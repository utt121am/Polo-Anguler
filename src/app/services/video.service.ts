import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { videoModel } from '../model/video';
import { profile_verification } from '../model/profile_verification';
import { flame } from '../model/flame';
import { CurrencyConvert } from '../model/CurrencyConvert';

@Injectable({
  providedIn: 'root'
})
export class VideoService {


  urlVideo: String = "http://localhost:8080/poloAnguler/";
  urlFlame: String = "http://localhost:8080/api/flame";
  urlCurrency: String = "http://localhost:8080/api/currency-exchange/";
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

  flameCalculate(flameObj: flame) {
    console.log('call api')
    return this.http.post<HttpResponse<any>>(this.urlFlame + '/calculate', flameObj,
      {
        observe: 'response'
      }
    );
  }

  currencyApiCall(currenciesObj: CurrencyConvert) {
    console.log('call currency api')
    return this.http.post<HttpResponse<any>>(this.urlCurrency + 'exchange', currenciesObj,
      {
        observe: 'response'
      }
    );
  }

}
