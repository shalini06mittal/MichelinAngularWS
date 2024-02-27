import { Component } from '@angular/core';
import { Employee } from '../model/employee';
import { employees } from '../model/data';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent {

  employeesdata:Employee[] = [];

  constructor(){
    this.employeesdata = employees;
  }
}
