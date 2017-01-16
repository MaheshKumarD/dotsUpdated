import { Component, Input, OnInit } from '@angular/core';
import { IObject } from './object';
import { ObjectService } from './object.service';

@Component({
    selector: 'objects-list',
    moduleId: module.id,
    templateUrl: 'object-list.component.html'
})
export class ObjectListComponent {
    constructor(private _objectService : ObjectService) {}

    pageTitle: string = 'Objects List';
    errorMessage: string;
    @Input() controlId: string;
    objects : IObject[];

    ngOnInit() : void {
        this._objectService.getObjects(this.controlId)
            .subscribe(
                objectcs => this.objects = objectcs, 
                error => this.errorMessage = <any>error);

    }    
}