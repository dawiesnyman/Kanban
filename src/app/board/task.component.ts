import { Component, OnInit, Input } from '@angular/core';
import {ITask} from '../models/task';

@Component({
    selector: 'pm-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent{
    @Input()  task: ITask;

    dragStart(ev) {
        ev.dataTransfer.setData('taskID', this.task.id); 
        console.log(this.task.id);
        //console.log(ev.target.id);
        //console.log('drag start');
      }
    
      dragEnd(ev) {
        //console.log('drag end');
      }
}