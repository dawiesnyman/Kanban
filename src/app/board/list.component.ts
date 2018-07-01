import { Component, HostListener, OnInit, Input } from '@angular/core';
import { ITaskList } from '../models/taskList';

@Component({
    selector: 'pm-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit{
    @Input()  taskList: ITaskList;
    title: string = "Title";
    displayAddCard = false;

    ngOnInit(): void {
        console.log('On Init');          
    }

    toggleDisplayAddCard() {
        this.displayAddCard = ! this.displayAddCard;
    }

    allowDrop($event) {
        $event.preventDefault(); 
    }

    drop($event) {
        $event.preventDefault();
        const taskId = $event.dataTransfer.getData('taskID');
    
        let target = $event.target;
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

    onEnter(value: string) {
        //this.taskList.tasks.push();
      }
}