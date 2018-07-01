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

    ngOnInit(): void {
        console.log('On Init');          
    }

    allowDrop($event) {
        $event.preventDefault();
        const data = $event.dataTransfer.getData('text');
        //console.log('data');
        //console.log(data);

        let target = $event.target;
        const targetClassName = target.className;
        console.log(targetClassName);

         while( target.className !== 'list') {
             target = target.parentNode;
         }
        
         target = target.querySelector('.tasks');
         console.log(target);
        
         if(targetClassName === 'task') { //if task
             //$event.target.parentNode.insertBefore(document.getElementById(data), $event.target);
           } else if(targetClassName === 'list__title') { //if title
             if (target.children.length) {
               //target.insertBefore(document.getElementById(data), target.children[0]);
             }else {
               target.appendChild(document.getElementById(data));
             }
           } else { //
             //target.appendChild(document.getElementById(data));
           }
    }

    drop($event) {
        console.log("drop");
    }
}