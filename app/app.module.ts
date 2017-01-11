import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ControlsListComponent } from './controls/controls-list.component';
import { ControlService } from './controls/control.service';
import { ControlDetailComponent } from './controls/control-detail.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'controls', component: ControlsListComponent},
      {path: 'control/:id', component: ControlDetailComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ], 
    {useHash: true})
    ],
  declarations: [ 
    AppComponent,
    WelcomeComponent,
    ControlsListComponent,
    ControlDetailComponent
    ],
    providers: [ControlService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
