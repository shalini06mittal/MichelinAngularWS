import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Employee } from '../model/employee';
import { employees } from '../model/data';
import { ActivatedRoute, Router } from '@angular/router';
import { EmphttpService } from '../service/emphttp.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnChanges, OnInit{

  employeesdata:Employee[] = [];
  @Input()
  newemp:Employee | null = null; 

  showEditForm:boolean = false
  editid:number = 0;
  selid:any = 0;

  constructor(private router:Router, private route:ActivatedRoute, private es:EmphttpService){
    this.employeesdata = employees;
    
  }
  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => this.selid = params['id'])

    this.es.getAllEmployees().subscribe(response=> this.employeesdata = response)
  }
  ngOnChanges(changes: SimpleChanges): void {
   console.log(this.newemp)
   if(this.newemp !== null)
      this.employeesdata.unshift(this.newemp);
  }
  deleteEmp(eid:any){
    alert('deleting '+eid)
    // let objindx = this.employeesdata.findIndex(employee=>employee.eid === eid);
    // this.employeesdata.splice(objindx,1)
    this.es.deleteEmployee(parseInt(eid)).subscribe({
      next: response=> console.log('delete success'),
      error: err=> console.log(err)
    })
  }
  editEmp(eid:any){
    alert('editing '+eid)
    this.showEditForm = !this.showEditForm
    this.editid = parseInt(eid)
  }

  viewProfile(eid:any){

    //this.router.navigate(['employees', eid])
    this.router.navigate([eid],{relativeTo:this.route})
  }

  isSelected(empid:any):boolean{
    console.log(empid === this.selid)
    return empid === this.selid;
    }
}
