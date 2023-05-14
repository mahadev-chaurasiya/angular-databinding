import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-databinding',
  templateUrl: './two-way-databinding.component.html',
  styleUrls: ['./two-way-databinding.component.css']
})
export class TwoWayDatabindingComponent {
 serverName = 'Server name Stopped';

 getServerNameByEvent(event: Event){
   this.serverName = (<HTMLInputElement>event.target).value;
 }
}
