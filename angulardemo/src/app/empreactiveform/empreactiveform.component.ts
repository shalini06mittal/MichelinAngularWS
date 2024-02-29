import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-empreactiveform',
  templateUrl: './empreactiveform.component.html',
  styleUrls: ['./empreactiveform.component.css']
})
export class EmpreactiveformComponent {

  name:FormControl = new FormControl('Shalini', Validators.required);
  form:FormGroup ;
  constructor(){
    console.log(this.name)
    this.form = new FormGroup({
      name:this.name,
      phone:new FormControl('', [Validators.required, Validators.minLength(10)])
    })
  }
}
