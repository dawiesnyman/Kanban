import { Component, OnInit } from '@angular/core';
import { ITaskList } from '../models/taskList';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'pm-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})
export class BoardComponent{
    taskLists: ITaskList[];

    constructor(){
       
        //this.listFilter = 'cart';

    }

    ngOnInit(): void {
        console.log('On Init');
        
        this.taskLists = [
            {
                title: "List 1",
                tasks: [
                    {                    
                        id: 1,
                        title: 'task 1',
                        description: ' disc one',
                        url: 'url1'
                    },
                    {                    
                        id: 3,
                        title: 'task 3',
                        description: ' disc three',
                        url: 'url3'
                    }
                ]
            },
            {
                title: "List 2",
                tasks: [
                    {                    
                        id: 1,
                        title: 'task 2',
                        description: ' disc two',
                        url: 'url2'
                    }
                ]
            }         
        ]
    }
}

