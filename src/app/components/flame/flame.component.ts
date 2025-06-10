import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { flame } from '../../model/flame';
import { apiService } from '../../services/api.service';

@Component({
  selector: 'app-flame',
  imports: [FormsModule, CommonModule],
  templateUrl: './flame.component.html',
  styleUrl: './flame.component.css'
})
export class FlameComponent {
  gender: string = '';
  yourName: string = '';
  partnerName: string = '';
  relationshipStatus: string = 'single';

  flameObj: flame = new flame();
  videoSer = inject(apiService);


  checkRelationship() {
    console.log("your name :", this.flameObj.bf)
    console.log("partner name :", this.flameObj.gf)
    console.log("gender :", this.gender)
    this.videoSer.flameCalculate(this.flameObj).subscribe(
      (res: any) => {
        console.log('res ', res)
        console.log('res body ', res.body.result)
        console.log('res body ', res.body)
        this.flameResult(res.body.result)
      }

    );
  }

  flameResult(char: any) {
    if (char == "F") {
      this.relationshipStatus = "Friend"
    }
    if (char == "L") {
      this.relationshipStatus = "Love"
    }
    if (char == "A") {
      this.relationshipStatus = "Affection"
    }
    if (char == "M") {
      this.relationshipStatus = "marriage"
    }
    if (char == "E") {
      this.relationshipStatus = "Enemy"
    }
    console.log('relationship :', this.relationshipStatus)
  }
}
