import {Injectable} from "@angular/core";

import { ITaskList } from '../models/taskList';
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
//import {List} from 'immutable';
import {BehaviorSubject} from "rxjs/Rx";

@Injectable()
export class DragDropService {
    private _lists: BehaviorSubject<ITaskList[]> = new BehaviorSubject(([]));

    public readonly lists: Observable<ITaskList[]> = this._lists.asObservable();

    // constructor(private todoBackendService: TodoBackendService) {
        // this.loadInitialData();
    // }
}