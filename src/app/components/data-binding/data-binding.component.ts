import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  name: String = "Uttam Nayek";
  course: String = "Anguler";
  duration: number = 5;
  minimumLength = 13;
  myType = "date";
  myPrimaryText = "text-danger";

  showMassage() {
    alert("you click button");
    console.log("clicked alert");
  }

  onStateChange(event: any) {
    debugger;
    const state = event.target?.['value'];
    alert(this.name + " change state to..." + state);
  }

  mouseEnter() {
    // alert("mouse enter on div");
    console.log("mouse enter on div")
  }

  mouseLeave() {
    // alert("mouse leave from div");
    console.log("mouse leave from div")
  }

  courseButton(course: String) {
    alert(course);
  }
}
