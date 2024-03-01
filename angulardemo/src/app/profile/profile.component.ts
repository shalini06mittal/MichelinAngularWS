import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmphttpService } from '../service/emphttp.service';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  
  employee:Employee | null | undefined
  constructor(private router:Router, private route:ActivatedRoute, private es:EmphttpService){
    
  }
  ngOnInit(): void {
    this.route.params.subscribe(data => {
    console.log(data['id'])
    this.es.getEmployeeById(parseInt(data['id']))
    .subscribe(emp => this.employee = emp);
    })
    } 
    back(eid:any)
    {
    // this add ; in the url => matrix param
    //this.router.navigate(['../',{id:eid}],{relativeTo:this.route})
   
    // to pass query parameter with ? syntax
    this.router.navigate(['../'],{relativeTo:this.route, queryParams:{id:eid}})
    }

    displayAddress(){
      this.router.navigate(['detail'],{relativeTo:this.route})
    }


}
