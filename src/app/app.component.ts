import { Component } from '@angular/core';
import { TaskService } from '../app/services/task.service';

  //component metadata / attribute
@Component({
  selector: 'pm-root', //directive / tag used by html 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TaskService]
})
//class
export class AppComponent {
  pageTitle: string = 'Angular: Getting Started';
}
