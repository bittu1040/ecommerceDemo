import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users= [
    {"name":"bittu", "password": "123456"},
    {"name":"bittu1", "password": "1234567"}
  ]
  constructor(private route: Router) { }

  userName:string="";
  password: any= "";
  isLogin: boolean= false;

  ngOnInit(): void {
  }


  messageAlert(){
    this.isLogin=false;
    this.users.forEach((value)=> {
      if(value.name===  this.userName && value.password=== this.password){
        this.isLogin= true;
        localStorage.setItem('name', this.userName);
        
      } 
    })
    if(this.isLogin){
      this.route.navigate(["/shop"])
      
      alert("login success")

    }
    else{
      alert("login failed");
    }


  }




}
