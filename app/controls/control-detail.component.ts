import { Component, OnInit } from '@angular/core';
import { IControl } from './IControl';
import { IObject } from '../objects/object';
import { ControlService } from './control.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'app/controls/control-detail.component.html'
})
export class ControlDetailComponent {
    controlId: string;
    private sub : any;

    constructor(private _controlService : ControlService,
    private route: ActivatedRoute) {

    }

    pageTitle: string = "Control Detail Page";
    control : IControl;
    objects : IObject[];
    errorMessage : string;

    ngOnInit() : void {
        this.sub = this.route.params.subscribe(
            params => {
                this.controlId = params['id'];
            }
        );
    }

    loadControl() : void {
        this._controlService.getControlDetails(this.controlId)
            .subscribe(control => {
                this.control = control;
                // this.loadControlObjects();
            });
    }

    // loadControlObjects() : void {
    //     this._controlService.getControlObjects(this.controlId)
    //         .subscribe(objects => this.objects = objects,
    //             error => this.errorMessage = <any> error);
    // }
}