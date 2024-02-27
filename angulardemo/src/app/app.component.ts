import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome To Angular Learning Path!!';
  x:number = 10
  isEnabled:boolean =  false
  username:string = 'Shalini';
  
  clicked(){
    alert('clicked')
    this.title = 'Hey I cam changed'
  }
}
