import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class dataService {

    public scope: any | boolean = false;

    constructor() {
    }

    public getScope(): any | boolean {
        return this.scope;
    }

    public setScope(scope: any): void {
        this.scope = scope;
    }
}