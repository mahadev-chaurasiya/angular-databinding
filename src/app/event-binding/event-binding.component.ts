import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  codeRunningStatus ='Server is not started';
  serverName='';

  getServerStatus(){
    this.codeRunningStatus = 'Server is started';
  }

  updateServerName(event:any){
    //console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
