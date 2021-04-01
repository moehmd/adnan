import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sendemail',
  templateUrl: './sendemail.component.html',
  styleUrls: ['./sendemail.component.css']
})
export class SendemailComponent implements OnInit {
  URL = 'http://localhost:3000/sendemail';
  
  contactUs: any;
    constructor(private http:HttpClient, private fb: FormBuilder) { }
  
    ngOnInit(): void {
      this.contactUs = this.fb.group ({
        name : ['', Validators.required],
        phone : [''],
        email : ['', Validators.email],
        comments : ['', Validators.required]
      });
    };

    sendMail() {
  this.http.post(this.URL, this.contactUs.value).subscribe(data => {
    console.log(data);
  });
  alert("Email sent.");
  this.contactUs.patchValue({
    name : "",
    phone : "",
    email : "",
    comments: ""
  })
  }
  
}
