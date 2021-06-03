import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  
  username:string;
  password:string;

  constructor(private fb: FormBuilder,
    private myRoute: Router,
    private auth: ServicesService) { 
  }

  ngOnInit() {
  }

  login() {
    if (this.auth.checkInput(this.username,this.password)) {
      alert("hi");
      this.auth.sendToken(this.username)
      this.myRoute.navigate(["todo"]);
    }
  }

}
