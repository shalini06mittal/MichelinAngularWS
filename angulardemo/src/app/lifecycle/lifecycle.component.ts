import { Component, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css'],
})
export class LifecycleComponent implements OnInit {


  pcountry: string = 'india';
  emp = { name: 'Shalini' };
  show:boolean= true
  // showEmp:boolean= true
  
  constructor() {
    console.log(`parent constructor`);
    
  }
  ngOnInit(): void {
    console.log(`parent ng oninit `);
    // rest api call => 
  }
}
