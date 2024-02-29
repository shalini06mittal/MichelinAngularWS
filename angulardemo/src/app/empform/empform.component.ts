import { Component, EventEmitter, Output } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-empform',
  templateUrl: './empform.component.html',
  styleUrls: ['./empform.component.css']
})
export class EmpformComponent {

  emp = {ename:''}
  @Output()
  empadded:EventEmitter<Employee> = new EventEmitter();

  saveEmployee(empform:any){
    console.log(empform.value)
    this.empadded.emit(empform.value)
    empform.reset();
  }
}
