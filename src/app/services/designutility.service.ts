import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  constructor(private http:HttpClient) { }


  messageAlert(){
    alert("service works and thanks for subscribing");
  }

product(): Observable <any> {
  return this.http.get('http://localhost:3000/test');
//  return this.http.get('https://jsonplaceholder.typicode.com/users/');
}

}
