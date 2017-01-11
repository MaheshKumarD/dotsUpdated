import { IObject } from '../objects/object';

export interface IControl {
    controlId : string;
    description:string;
    controlType : string;
    modifiedDate : Date;
    modifiedBy: string;
    objects : IObject[];
}