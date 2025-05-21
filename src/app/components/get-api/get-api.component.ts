import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetAPIComponent {

  userList: any[] = [];
  studentList: any[] = [];
  myUsers: any[] = [];

  constructor(private http: HttpClient) {
  }

  getUser() {
    console.log("get user is clicked")
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(
      (result: any) => {

        this.userList = result;
      }
    )
  }

  getBankLoan() {
    console.log("get bank is clicked")
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe(
      (result: any) => {

        this.studentList = result;
      }
    )
  }

  
  getMyApi() {
    console.log("get bank is clicked")
    this.http.get("http://localhost:8080/poloAnguler/getAllUser").subscribe(
      (result: any) => {

        this.myUsers = result;
      }
    )
  }
}
