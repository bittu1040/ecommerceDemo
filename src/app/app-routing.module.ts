import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import {CheckoutComponent} from './checkout/checkout.component'
import {LoginComponent} from './login/login.component'
import { CartComponent } from './cart/cart.component';
import { GetuserComponent } from './getuser/getuser.component';

const routes: Routes = 
[
  {  path: "login", component: LoginComponent  },
  {  path: '', redirectTo: 'login', pathMatch: 'full'},
  {  path: "shop", component: ShopComponent },
  {  path: "checkout", component: CheckoutComponent},
  {  path: "cart", component: CartComponent},
  {path: "getuserdetails", component: GetuserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
