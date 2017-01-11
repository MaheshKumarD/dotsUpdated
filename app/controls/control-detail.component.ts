import { Component } from '@angular/core';
import { IControl } from './IControl';

@Component({
    templateUrl: 'app/controls/control-detail.component.html'
})
export class ControlDetailComponent {
    pageTitle: string = "Control Detail Page";
    control : IControl;
    
}