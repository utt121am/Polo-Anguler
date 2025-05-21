import { Component, inject, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { videoModel } from '../../model/video';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-videos',
  imports: [FormsModule, CommonModule,],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent implements OnInit {
  [x: string]: any;

  myUsers: videoModel[] = [];
  videosList: any[] = [];

  videoObj: videoModel = new videoModel();
  videoSer = inject(VideoService);

  ngOnInit(): void {
    debugger;
    this.getMyUser();
  }

  videoEdit(data: videoModel) {
    console.log(data.id)
    console.log(data.name)
    console.log(data.age)
    console.log(data.roll)
    console.log(data.department)
    console.log(data.cgpa)

    this.videoObj = data;
  }

  submitForm(data: NgForm,) {
    if (data.valid) {
      // Process your form
      console.log('Form data:', this.videoObj);
    } else {
      console.log('Form is invalid');
    }
  }

  hasError: boolean = false;
  errorMessage = "";

  getMyUser() {
    debugger;
    this.videoSer.getUsers().subscribe((result: any) => {
      debugger;
      this.myUsers = result;
    });
  }



  onSave(buttonName: string, form: NgForm) {
    this.videoSer.postUser(this.videoObj).subscribe(
      (res: any) => {
        if (res.result) {
          alert(this.videoObj.name + " successfully " + buttonName);
          this.getMyUser();
          this.onCancel(form);  // reset the form UI & values
        } else {
          this.hasError = true;
          console.error("Save failed:", res.massage);
          alert("Error: " + res.massage);
        }
      },
      (error) => {
        this.hasError = true;
        console.error("API error:", error);
        alert("Something went wrong.");
      }
    );
  }



  onUpdate(buttonName: string) {
    this.videoSer.postUser(this.videoObj).subscribe(
      (res: any) => {
        if (res.result) {
          alert(this.videoObj.name + " successfully " + buttonName);
          this.getMyUser();
          this.onCancel();
        } else {
          this.hasError = true;
          this.errorMessage = res.massage; // Store error message here
          alert("Some error occurred : " + res.massage);
        }
      },
      (error) => {
        this.hasError = true;
        this.errorMessage = "Something went wrong with the API call.";
        console.error("API call failed", error);
      }
    );
  }


  onDel(obj: videoModel) {
    let con = confirm(`Are you sure you want to delete ${obj.name}?`);
    if (con) {
      console.log("confirm : " + con);
      this.videoSer.deleteUser(obj).subscribe(
        (res: any) => {
          console.log('Response :', res);
          console.log('res is ', res);
          console.log('res.result is ', res.result);
          debugger;

          if (res.result) {
            alert(res.massage);
            console.log(res.massage);
            this.getMyUser();
            this.onCancel();
          }

          else {

            alert("Some error occurred : " + res.massage);
          }
        }
        ,
        (error) => {
          console.error("API call failed", error);
          alert("Something went wrong with the API call.");
        }
      );
    }
  }


  videoObjClr: videoModel = {
    id: 0,
    name: '',
    roll: 0,
    age: 0,
    department: '',
    cgpa: 0
  };


  onCancel(form?: NgForm) {
    this.videoObj = {
      id: 0,
      name: ' ',
      roll: 0,
      age: 0,
      department: ' ',
      cgpa: 0
    };
    form?.resetForm(this.videoObj); // <-- this clears the form UI
  }
}
