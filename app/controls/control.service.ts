import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IControl } from './IControl';

@Injectable()
export class ControlService {
    private _controlsUrl = 'http://localhost:8080/auditcontrols/controls';

    constructor(private _http: Http) {}

    getControls(): Observable<IControl[]> {
        return this._http.get(this._controlsUrl)
                    .map((response : Response) => <IControl[]> response.json())
                    .do(data => console.log('All: ' + JSON.stringify(data)))
                    .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}