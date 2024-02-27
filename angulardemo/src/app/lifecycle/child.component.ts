import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, OnDestroy{

  @Input()
  country:string ='';
  @Input()
  employee = {"name":""}
  
  data:any[] =[
    {"country":"uk","states":["London"]},
    {"country":"india","states":["maharashtra", "UP","MP"]},
    {"country":"ireland","states":["ire1","ire2"]},
    {"country":"usa","states":["Illinois","SFO"]}
    ]
    countrystates:any[]=[]

    constructor(){
      console.log(`Child constructor ${this.country}: ${JSON.stringify(this.employee)}`)
    }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`Child on changes ${this.country}: ${JSON.stringify(this.employee)}`)
    this.countrystates = this.data.filter(item => item.country===this.country)[0].states;
  }

  ngDoCheck(): void {
    console.log(`Child on do check ${this.country}: ${JSON.stringify(this.employee)}`)
  }

  ngOnDestroy(): void {
    console.log(`Child on destroy`)
  }

    ngOnInit(): void {
      console.log(`Child on init ${this.country}: ${JSON.stringify(this.employee)}`)
      // this.countrystates = this.data.filter(item => item.country===this.country)[0].states;
      // console.log(this.countrystates)
    }
}
