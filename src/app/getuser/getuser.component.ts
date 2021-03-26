import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../services/designutility.service';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-getuser',
  templateUrl: './getuser.component.html',
  styleUrls: ['./getuser.component.scss']
})
export class GetuserComponent implements OnInit {

  constructor(private msgService:DesignutilityService) { }
  products:any;
  ngOnInit(): void {

   this.getproduct();
  }

// btnClick(){
//   const msgService= new UsersService();
//   msgService.showMessage();
// }

getproduct(){
  this.msgService.product().subscribe( data => {
    this.products = data
  });
}


btnClick(){
  this.msgService.messageAlert();
}



}
