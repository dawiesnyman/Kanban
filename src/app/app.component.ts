import { Component } from '@angular/core';
  
  //component metadata / attribute
@Component({
  selector: 'pm-root', //directive / tag used by html 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//class
export class AppComponent {
  pageTitle: string = 'Angular: Getting Started';
}
