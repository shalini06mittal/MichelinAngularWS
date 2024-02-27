import { Component, Input } from '@angular/core';
import { Employee, Employee1 } from '../model/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  @Input() // child is getting input from parent component
  employee:Employee= {eid:1, ename:'shalini', password:'shalini',
                    email:'shalini@gmail.com', phone:'1321312312'
                    , address:{country:'India'}};
  //emp:Employee1 = new Employee1(1,"");
                

}
