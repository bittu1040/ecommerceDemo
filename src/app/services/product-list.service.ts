import { Injectable } from '@angular/core';
import {} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor() { }


product=
 [
    {"id":1, "bookName": "physics", "img": "../assets/physics.jpg", "price": 200, "quantity":1},
    {"id":2, "bookName": "chemistry", "img": "../assets/chemistry.jpg", "price": 300,"quantity":1 },
    {"id":3, "bookName": "mathematics", "img": "../assets/mathematics.jpeg", "price": 400, "quantity":1}
  ]


}
