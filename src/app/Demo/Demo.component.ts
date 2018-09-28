import { Component,EventEmitter,Output } from '@angular/core';
import {UserDetails} from '../UserDetails';

@Component({
  selector: 'app-Demo',
  templateUrl: './Demo.component.html',
  styleUrls: ['./Demo.component.css'],
})


export class DemoComponent {
  



  @Output() public RequestValue = new EventEmitter();

public onCall(name,trackname,roomname)
{
  this.RequestValue.emit(name);
  this.RequestValue.emit(trackname);
  this.RequestValue.emit(roomname);
}

}
