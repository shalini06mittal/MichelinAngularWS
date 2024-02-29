import { Component } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
  providers:[DemoService]
})
export class ServiceComponent {

  title:string=''
  constructor( public service:DemoService){
  }
  changeTitle(){
    this.service.setMessage(this.title);
    }

}
