import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { ControlsListComponent } from './controls/controls-list.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule 
    ],
  declarations: [ 
    AppComponent,
    ControlsListComponent
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
