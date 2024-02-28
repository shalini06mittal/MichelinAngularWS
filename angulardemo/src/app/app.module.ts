import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ChildComponent } from './lifecycle/child.component';
import { DirectivesComponent } from './directives/directives.component';
import { HoverDirective } from './directives/hover.directive';
import { PipesComponent } from './pipes/pipes.component';
import { PowerPipe } from './pipes/power.pipe';
import { registerLocaleData } from '@angular/common'; 
import localeFr from '@angular/common/locales/fr';
import { EmpformComponent } from './empform/empform.component'; 
// the second parameter 'fr' is optional 
registerLocaleData(localeFr, 'fr');
//  l1:LifecylceCOmponent = new LifecylceComponent()
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeComponent,
    EmployeelistComponent,
    LifecycleComponent,
    ChildComponent,
    DirectivesComponent,
    HoverDirective,
    PipesComponent,
    PowerPipe,
    EmpformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
