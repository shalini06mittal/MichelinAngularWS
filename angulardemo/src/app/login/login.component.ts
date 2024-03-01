import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  login(data:any){
    console.log(data)
    if(data.email === 's@g.c' && data.password === 'shalini'){
      sessionStorage.setItem('email', data.email)
    }
    else{
      alert('error login')
    }
  }
}
