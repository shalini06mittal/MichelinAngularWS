import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmpformComponent } from './empform/empform.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfiledetailComponent } from './profiledetail/profiledetail.component';
import { authGuard } from './service/auth.guard';

//https://stackoverflow.com/questions/42992212/in-angular-what-is-pathmatch-full-and-what-effect-does-it-have

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},// localhost:4200/login
  {path:'login', component:LoginComponent},
  {path:'employees', component:EmployeelistComponent},
  {path:'employees/:id', component:ProfileComponent,canActivate:[authGuard],
    children: [
      { path:'detail', component:ProfiledetailComponent}
    ]
  },
  {path:'add', component:EmpformComponent},
  {path:'pipe', component:PipesComponent},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
