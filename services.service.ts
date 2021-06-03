import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  userName = "riyasahamed";
  passWord = "abcde";

  constructor(private myRoute: Router) { }

  sendToken(token: string) {
    
    localStorage.setItem("LoggedInUser", token)
  }

  getToken() {
    return localStorage.getItem("LoggedInUser")
  }

  checkInput(name:string , password:string) {
    alert(name);
    alert(password);

    if(name == this.userName && password == this.passWord) {
      return true;
    } else{
      return false;
    }
  }

  isLoggednIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem("LoggedInUser");
    this.myRoute.navigate([""]);
  }
}
