import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentDetailsRoutingModule } from './student-details-routing.module';
import { StudentDetailsComponent } from './student-details.component';
import { SharedModule } from 'src/app/shared-modules/shared.module';
import { StudentsListingComponent } from './students-listing/students-listing.component';
import { StudentApiService } from './services/student-api.service';


@NgModule({
  declarations: [
    StudentDetailsComponent,
    StudentsListingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StudentDetailsRoutingModule
  ],
  providers:[StudentApiService]
})
export class StudentDetailsModule { }
