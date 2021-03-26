import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../services/designutility.service';
import {UsersService} from '../services/users.service'

@Component({
  selector: 'app-postuser',
  templateUrl: './postuser.component.html',
  styleUrls: ['./postuser.component.scss']
})
export class PostuserComponent implements OnInit {

  constructor(private msgService: DesignutilityService) { }

  ngOnInit(): void {
  }


  // btnClick(){
  //   const msgService= new UsersService();
  //   msgService.showMessage();
  // }
  btnClick(){
    this.msgService.messageAlert();
  }
}
