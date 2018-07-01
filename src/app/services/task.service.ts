import { Injectable } from "@angular/core";
import { ITask } from "../models/task";
import { ITaskList } from "../models/taskList";

import { Observable } from "rxjs/Observable";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/observable/throw';

@Injectable()
export class TaskService{
    private _recordsUrl = "api/tasks/tasks.json";

    constructor(private _http: HttpClient){

    }

    getTasks(): Observable<ITask[]>{
        return this._http.get<ITask[]>(this._recordsUrl)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }
    
    getTasksByListId(): Observable<ITask[]>{
        return this._http.get<ITask[]>(this._recordsUrl)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }
    
    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}