import { Component, HostListener, OnInit, Input } from '@angular/core';
import { ITaskList } from '../models/taskList';
import { ITask } from '../models/task';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';
import { iterateListLike } from '@angular/core/src/change_detection/change_detection_util';

@Component({
    selector: 'pm-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit{
    @Input()  taskList: ITaskList;
    title: string = "Title";
    displayAddCard = false;
    errorMessage: string = '';
    task: ITask;

    constructor(private _taskService: TaskService){
    }

    ngOnInit(): void {
        console.log('On Init');  
        
        // this._taskService.getTasks()
        // .subscribe(
        //     batches => this.tasks = batches,
        //     error => this.errorMessage = <any>error);        
    }

    toggleDisplayAddCard() {
        this.displayAddCard = ! this.displayAddCard;
    }

    allowDrop($event) {
        $event.preventDefault(); 
    }

    drop($event) {
        $event.preventDefault();
        //get moving tasks Id
        const taskId = $event.dataTransfer.getData('taskID');        
        let target = $event.target;

        this._taskService.getTask(taskId)
        .subscribe(
            tasks => { this.task = tasks[0]},
            error => this.errorMessage = <any>error);
            console.log('task.title');
            console.log(this.task.title);

        if(taskId == 99)
        {
            console.log(taskId);
        }else{
            const targetClassName = target.className;
            console.log($event.target);

            while( target.className !== 'taskList') {
                target = target.parentNode;
            }

            target = target.querySelector('.tasks');
        
            if(targetClassName === 'task') { //if card
                $event.target.parentNode.insertBefore(document.getElementById(taskId), $event.target);
            } else if(targetClassName === 'taskListTitle') { //if title
            if (target.children.length) {
                target.insertBefore(document.getElementById(taskId), target.children[0]);
            }else {
                target.appendChild(document.getElementById(taskId));
            }
            } else { //
                target.appendChild(document.getElementById(taskId));
            }         
        }
    }

    onEnter(value: string) {
        //this.taskList.tasks.push();
      }
}