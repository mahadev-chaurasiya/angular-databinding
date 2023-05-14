import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDatabindingComponent } from './two-way-databinding/two-way-databinding.component';
import { FormsModule } from '@angular/forms';
import { SampleTwoWayDatabindingComponent } from './sample-two-way-databinding/sample-two-way-databinding.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayDatabindingComponent,
    SampleTwoWayDatabindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
