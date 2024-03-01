import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root',
})
export class EmphttpService {
  url: string = 'http://localhost:3000/employees';
  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<any> {
    return this.http.get<any>(this.url);
  }
  getEmployeeById(eid:any): Observable<Employee> {
    return this.http.get<Employee>(this.url + '/' + eid);
  }
  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.url, employee);
  }
  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.url + '/' + employee.eid, employee);
  }
  deleteEmployee(eid: number) {
    return this.http.delete(this.url + '/' + eid);
  }
}
