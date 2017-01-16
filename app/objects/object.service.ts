import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IObject } from './object';

@Injectable()
export class ObjectService {
    private _objectsUrl = 'http://localhost:8080/auditcontrols/controls/';

    constructor(private _http : Http) {}

    getObjects(controlId: string): Observable<IObject[]> {
        var objectListUrl = this._objectsUrl + controlId + '/objects';
        return this._http.get(this._objectsUrl)
                .map((response : Response) => <IObject[]> response.json())
                .do(data => console.log('All Objects ' + JSON.stringify(data)))
                .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
