import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app2-data-binding';
  serverID =1200;
  serverStatus = "OK"

  getStatus(){
    return this.serverStatus;
  }
}
