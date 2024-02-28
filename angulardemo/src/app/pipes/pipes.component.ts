import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  no = 3.14659265 

  bdate = new Date()

  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

  base:number = 2;
  constructor(@Inject(LOCALE_ID) public locale: string) { }
}
