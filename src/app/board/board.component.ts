import { Component, OnInit } from '@angular/core';
import { ITaskList } from '../models/taskList';
import { Title } from '@angular/platform-browser';
import { TaskService } from '../services/task.service';

@Component({
    selector: 'pm-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})
export class BoardComponent{
    taskLists: ITaskList[];

    constructor(private _taskService: TaskService){
    }

    ngOnInit(): void {
        console.log('On Init');
        /*
        this._taskService.getTasks()
        .subscribe(
            batches => this.tasks = batches,
            error => this.errorMessage = <any>error); 
        */
       
        this.taskLists = [
            {
                id: 1,
                title: "List 1",
                tasks: [
                    {                    
                        id: 1,
                        title: 'task 1',
                        description: ' disc one',
                        url: 'url1',
                        canGoTo: [
                            2, 3, 4, 5
                        ]
                    },
                    {                    
                        id: 3,
                        title: 'task 3',
                        description: ' disc three',
                        url: 'url3',
                        canGoTo: [
                            2, 3, 4, 5
                        ]
                    }
                ]
            },
            {
                id: 2,
                title: "List 2",
                tasks: [
                    {                    
                        id: 2,
                        title: 'task 2',
                        description: ' disc two',
                        url: 'url2',
                        canGoTo: [
                            1,2, 3, 4, 5
                        ]
                    }
                ]
            }         
        ]
    }
}

