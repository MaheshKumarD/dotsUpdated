import { Component } from '@angular/core';
import { IMenuItem } from './menu/menuitem';


@Component({
    selector: 'audit-app',
    moduleId: module.id,
    templateUrl: "./app.component.html"
})
export class AppComponent { 
    pageTitle: string = "Audit Controls Management";
    applicationTitle: string = "Audit Controls Management";
    userName: string = "Trilok V";
    menuItems : IMenuItem[] = [
        {
            "menuLabel" :"Admin",
            "target" : "#"
        },
        {
            "menuLabel" :"Controls",
            "target" : "#"
        },
        {
            "menuLabel" :"Component",
            "target" : "#"
        }
    ]
}
