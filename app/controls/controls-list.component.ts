import { Component, Input } from '@angular/core';
import { IControl } from './IControl';

@Component({
    selector: "audit-controls",
    moduleId: module.id,
    templateUrl: 'controls-list.component.html'
})
export class ControlsListComponent {
    pageTitle: string = "Audit Controls List";
    listFilter: string = '';
    controls : IControl[] = [
        {
                "controlId" : "CTRL-001",
                "description": "Sample Controls for testing",
                "controlType" : "SOX CONTROL",
                "modifiedDate" : "Trilok",
                "modifiedBy" : "1/1/2017"
        },
        {
                "controlId" : "CTRL-002",
                "description": "SOX Controls for Module 02",
                "controlType" : "SOX CONTROL",
                "modifiedDate" : "Trilok",
                "modifiedBy" : "1/1/2017"
        },
        {
                "controlId" : "CTRL-003",
                "description": "SOX Controls for Module 03",
                "controlType" : "SOX CONTROL",
                "modifiedDate" : "Trilok",
                "modifiedBy" : "1/1/2017"
        },
        {
                "controlId" : "CTRL-004",
                "description": "SOX Controls for Module 04",
                "controlType" : "SOX CONTROL",
                "modifiedDate" : "Trilok",
                "modifiedBy" : "1/1/2017"
        },
        {
                "controlId" : "CTRL-005",
                "description": "SOX Controls for Module 05",
                "controlType" : "SOX CONTROL",
                "modifiedDate" : "Trilok",
                "modifiedBy" : "1/1/2017"
        },
        {
                "controlId" : "CTRL-006",
                "description": "SOX Controls for Module 06",
                "controlType" : "SOX CONTROL",
                "modifiedDate" : "Trilok",
                "modifiedBy" : "1/1/2017"
        },
        {
                "controlId" : "CTRL-007",
                "description": "SOX Controls for Module 07",
                "controlType" : "SOX CONTROL",
                "modifiedDate" : "Trilok",
                "modifiedBy" : "1/1/2017"
        },
        {
                "controlId" : "CTRL-008",
                "description": "SOX Controls for Module 08",
                "controlType" : "SOX CONTROL",
                "modifiedDate" : "Trilok",
                "modifiedBy" : "1/1/2017"
        },
        {
                "controlId" : "CTRL-009",
                "description": "SOX Controls for Module 09",
                "controlType" : "SOX CONTROL",
                "modifiedDate" : "Trilok",
                "modifiedBy" : "1/1/2017"
        },
        {
                "controlId" : "CTRL-010",
                "description": "SOX Controls for Module 10",
                "controlType" : "SOX CONTROL",
                "modifiedDate" : "Trilok",
                "modifiedBy" : "1/1/2017"
        }
    ];

    processClick(control : IControl) : void {
        alert("Clicked " + control.controlId);
    }
}