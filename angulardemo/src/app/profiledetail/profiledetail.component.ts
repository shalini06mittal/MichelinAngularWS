import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profiledetail',
  templateUrl: './profiledetail.component.html',
  styleUrls: ['./profiledetail.component.css']
})
export class ProfiledetailComponent{

  eid:any = 0

  constructor(private route:ActivatedRoute){
      this.route.parent?.params.subscribe(data => this.eid = data['id'])
  }
}
