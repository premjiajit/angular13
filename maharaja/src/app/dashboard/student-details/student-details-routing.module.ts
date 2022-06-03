import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentDetailsComponent } from './add-student-details/add-student-details.component';
import { StudentDetailsComponent } from './student-details.component';
import { StudentsListingComponent } from './students-listing/students-listing.component';

const routes: Routes = [
  { path: '', 
component: StudentsListingComponent 
},
{ path: 'add-student', 
component: AddStudentDetailsComponent 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentDetailsRoutingModule { }
