import { Injectable } from '@angular/core';
// import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() {

   }

  getData(){
    return {
      name:"anil",
      age:30,
      id:10
    }
  }


  showMessage(){
    alert("service works");
  }




}
