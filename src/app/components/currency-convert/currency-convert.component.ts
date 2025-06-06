import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyConvert } from '../../model/CurrencyConvert';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-currency-convert',
  imports: [FormsModule, CommonModule],
  templateUrl: './currency-convert.component.html',
  styleUrl: './currency-convert.component.css'
})
export class CurrencyConvertComponent {
  amount: number = 0;
  fromCurrency: String = ''
  toCurrency: String = ''
  currencies: string[] = [
    'AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN',
    'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTN',
    'BWP', 'BYN', 'BZD', 'CAD', 'CDF', 'CHF', 'CLP', 'CNY', 'COP', 'CRC',
    'CUP', 'CVE', 'CZK', 'DJF', 'DKK', 'DOP', 'DZD', 'EGP', 'ERN', 'ETB',
    'EUR', 'FJD', 'GBP', 'GEL', 'GHS', 'GIP', 'GMD', 'GNF', 'GTQ', 'GYD',
    'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'INR', 'IQD', 'IRR',
    'ISK', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KMF', 'KRW', 'KWD',
    'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LYD', 'MAD', 'MDL', 'USD'
  ];
  result: number = 0;


  currencyObj: CurrencyConvert = new CurrencyConvert();
  videoSer = inject(VideoService);

  convert() {
    this.currencyObj.amount = this.amount;
    this.currencyObj.fromCurrency = this.fromCurrency;
    this.currencyObj.toCurrency = this.toCurrency;

    console.log('from Amount : ', this.amount)
    console.log('from currency : ', this.fromCurrency)
    console.log('to currency : ', this.toCurrency)

    console.log('from Amount obj : ', this.currencyObj.amount)
    console.log('from currency obj : ', this.currencyObj.fromCurrency)
    console.log('to currency obj : ', this.currencyObj.toCurrency)

    this.videoSer.currencyApiCall(this.currencyObj).subscribe(
      (result: any) => {
        console.log('.........subscribe')
        console.log('result : ', result)
        console.log('result body : ', result.body)
        console.log('result response : ', result.body.response)
        this.result = result.body;
      }
    );
  }
}
