import { Component } from '@angular/core';
import { Employee } from './model/employee';

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
  showaddEmpForm:boolean = false;
  
  clicked(){
    alert('clicked')
    this.title = 'Hey I cam changed'
  }

  newemp:Employee | null = null;

  newEmpAdded(employee:any){
      this.newemp = employee;
      console.log(this.newemp);
  }
  // openEmpForm(){
  //   this.showaddEmpForm = !this.showaddEmpForm;
  // }
}
