import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {

  isDiv1Visibale: boolean = false;
  isDiv2Visibale: String = "No";
  isDiv3Visibale: String = "sun";

  isActiveColor: String = "bg-info"

  cities: String[] = ['Pune', 'kolkata', 'Mumbai', 'Delhi', 'Haydrabad'];

  students: any[] = [
    { studentId: 43, name: "Uttam Nayek", mobile: "9749194428", city: "pathar pratima", isActive: false },
    { studentId: 15, name: "Tanmoy Karmoker", mobile: "9073418373", city: "Barasat", isActive: true },
    { studentId: 13, name: "Soumajit Maity", mobile: "7585081578", city: "Nandigram", isActive: true },
    { studentId: 48, name: "Rajib Baidya", mobile: "6290560683", city: "Diamond Harbour", isActive: false },
    { studentId: 31, name: "Anindya Chatterjee", mobile: "9749194428", city: "Dumdum", isActive: false }
  ];

  showHideDiv(isShow: boolean) {
    this.isDiv1Visibale = isShow;
  }

  // showHideDiv2(isShow: String) {
  //   this.isDiv2Visibale = isShow;
  // }

  // showHideDiv3(isShow: String) {
  //   this.isDiv3Visibale = isShow;
  // }
}