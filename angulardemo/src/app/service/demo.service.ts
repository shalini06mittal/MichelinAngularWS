import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  message:string;
  constructor() {
    console.log('Demo service created')
    this.message = 'Hey from service'
   }

   setMessage(message:string)
   {
     this.message = message;
   }
}
