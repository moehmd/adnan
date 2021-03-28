import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sendemail',
  templateUrl: './sendemail.component.html',
  styleUrls: ['./sendemail.component.css']
})
export class SendemailComponent implements OnInit {
  URL = 'http://localhost:3000/sendemail';
  // name: string;
  // email: string;
  // comments: string;
  
  contactUs: any;
    constructor(private http:HttpClient, private fb: FormBuilder) { }
  
    ngOnInit(): void {
     this.contactUs = this.fb.group ( {
       name : ['', Validators.required],
       email : ['', Validators.email],
       comments : ['', Validators.required]
     })
    }
    sendMail() {
 this.http.post(this.URL,  JSON.stringify(this.contactUs.value)).subscribe(data => {
   console.log(data);
  })
  alert("Email sent.")
  }
  
}
