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
import { ObjectService } from './objects/object.service';
import { ObjectListComponent } from './objects/object-list.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
          {path: 'controls', component: ControlsListComponent},
          {path: 'control-details/:id', component: ControlDetailComponent},
          {path: 'objects', component: ObjectListComponent},
          {path: 'welcome', component: WelcomeComponent},
          {path: '', redirectTo: 'welcome', pathMatch: 'full'},
          {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
        ], 
        {useHash: true}
      )
    ],
  declarations: [ 
    AppComponent,
    WelcomeComponent,
    ControlsListComponent,
    ControlDetailComponent,
    ObjectListComponent
    ],
    providers: [ControlService, ObjectService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
