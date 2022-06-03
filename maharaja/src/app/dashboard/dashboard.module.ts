import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MaterialExampleModule } from '../materil.module';
import { AddStudentDetailsComponent } from './student-details/add-student-details/add-student-details.component';
import { SharedModule } from '../shared-modules/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    AddStudentDetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialExampleModule,
    SharedModule
  ]
})
export class DashboardModule { }
