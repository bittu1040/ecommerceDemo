import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  value:any;
  
  constructor( private route: Router) {}
  cartItem: any;
  cartNumber: any;
  convertedData: any ;
  totalCost: any;
  ngOnInit(): void {
    this.onLoad();

  }
onLoad(){
  this.cartNumber= localStorage.getItem('key');
    this.cartItem= JSON.parse(localStorage.getItem('key1') || '{}');
    console.log("items in cart", this.cartItem);
    this.totalCost= localStorage.getItem('totalCost');
}
  removeItemCart(product2:any) {
    this.cartItem.forEach((element:any) => {
      if(element.id===product2.id){
        if(element.quantity>1){
          element.quantity=Number(element.quantity)-Number(1)
          this.totalCost=Number(this.totalCost)- Number(product2.price)
         
        }
        else{
           element.quantity=Number(element.quantity)-Number(1)
          this.totalCost=Number(this.totalCost)- Number(product2.price)
       //   this.cartItem.splice(product2,1)
          var index= this.cartItem.indexOf(product2)
          if(index!==-1){
            this.cartItem.splice(index, 1)
          }
          this.value = Number(this.cartNumber) - Number(1)
    localStorage.setItem('key', this.value)
        }

      }
    });
    this.value = Number(this.cartNumber) - Number(1)
    localStorage.setItem('key', this.value)
    localStorage.setItem('key1', JSON.stringify(this.cartItem));
    localStorage.setItem('totalCost', this.totalCost)
   
   
   this.onLoad()

  }



  checkOut(){
    this.route.navigate(["/checkout"])
 }

}
