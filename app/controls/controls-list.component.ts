import { Component, Input } from '@angular/core';
import { IControl } from './IControl';
import { ControlService } from './control.service';
import { OnInit } from  '@angular/core';

@Component({
    selector: "audit-controls",
    moduleId: module.id,
    templateUrl: 'controls-list.component.html'
})
export class ControlsListComponent {
    constructor(private _controlService : ControlService) {

    }

    pageTitle: string = "Audit Controls List";
    errorMessage: string;
    listFilter: string = '';
    controls : IControl[];

    processClick(control : IControl) : void {
        alert("Clicked " + control.controlId);
    }

    ngOnInit() : void {
        this._controlService.getControls()
            .subscribe(
                controls => this.controls = controls,
                error => this.errorMessage = <any>error);
    }
}