import { Component, OnInit } from '@angular/core';
import {User} from './User';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  
  public uname="asdasdx";
  public upass="qweqwe";
  public ans="";
  User: User={
    username:'Sayan',
    password:'Default'
  };

  constructor() 
  {

  }

  ngOnInit() {
  }

  onClick(event,namevalue,passvalue)
  {
    this.uname=namevalue;
    this.upass=passvalue;  
  return this.ans="Your Username is "+this.uname+" and the Password is "+this.upass;
  }
}
