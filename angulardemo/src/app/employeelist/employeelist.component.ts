import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../model/employee';
import { employees } from '../model/data';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnChanges{

  employeesdata:Employee[] = [];
  @Input()
  newemp:Employee | null = null; 
  constructor(){
    this.employeesdata = employees;
  }
  ngOnChanges(changes: SimpleChanges): void {
   console.log(this.newemp)
   if(this.newemp !== null)
      this.employeesdata.unshift(this.newemp);
  }
}
