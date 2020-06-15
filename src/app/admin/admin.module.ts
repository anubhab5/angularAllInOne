import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UppercasePipe } from './uppercase.pipe';
import { LowercasePipe } from './lowercase.pipe';
import { RandomCompComponent } from './random-comp/random-comp.component';

// ng g pipe Lowercase --module admin
@NgModule({
  declarations: [
    AdminDashboardComponent,
    RandomCompComponent,
    UppercasePipe,
    LowercasePipe,
  ],
  imports: [
    CommonModule
  ],
  bootstrap: [],
  exports:[
    AdminDashboardComponent
  ]
})
export class AdminModule { }
