import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../services/product-list.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  [x: string]: any;


  constructor(private productlist: ProductListService, private route: Router) { }

  products: any;
  cartItem: any = [];
  cartNumber: any = 0;
  value: any;
  isDuplicate: boolean = false;
  totalCost: any = 0;

  ngOnInit(): void {
    this.products = this.productlist.product;
    this.userName= localStorage.getItem('name')
    //console.log(this.products);
    this.cartNumber = localStorage.getItem('key');
  }

  additemcart(product1: any) {
    this.totalCost = Number(this.totalCost) + Number(product1.price)
    if (this.cartItem.length === 0) {
      this.cartItem.push(product1)
      console.log("first item", this.cartItem);
    }
    else {
      this.cartItem.forEach((value: any) => {
        if (value.id === product1.id) {
          product1.quantity = Number(value.quantity) + Number(1);
          console.log("duplicate ", this.cartItem);
          this.isDuplicate=true;
        }
        else {
                   this.isDuplicate = false;
               }
      })
      if (!this.isDuplicate && this.products.length !== this.cartItem.length) {
            this.cartItem.push(product1)
            console.log("new item", this.cartItem)
           }
    }
   // console.log(this.cartItem);
    this.value = Number(this.cartNumber) + Number(1)
    localStorage.setItem('key', this.value)
    this.cartNumber = localStorage.getItem('key');
    console.log(this.cartNumber);
  }

  cart() {
    this.route.navigate(["/cart"])
    localStorage.setItem('key1', JSON.stringify(this.cartItem));
    var convertedData = JSON.parse(localStorage.getItem('key1') || '{}');

    console.log(convertedData);
    localStorage.setItem('totalCost', this.totalCost)

  }





  // resetItem(){
  //   localStorage.clear()
  // }






}


