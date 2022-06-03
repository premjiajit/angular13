import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student-details',
  templateUrl: './add-student-details.component.html',
  styleUrls: ['./add-student-details.component.scss']
})
export class AddStudentDetailsComponent implements OnInit {
  studentDetailsForm = this.fb.group({
    studentName: ['', Validators.required],
    branch: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    subject: this.fb.array([
      this.fb.group({
        subjectName: ['', Validators.required],
        textbook: ['', Validators.required],
        records: ['', Validators.required]
      })
    ]),
  });
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  
  subjectFormArray():FormArray  {
    return this.studentDetailsForm.get('subject') as FormArray;
  }

  addSubject(): any{
    return this.subjectFormArray().push(
      this.fb.group({
        subjectName: ['', Validators.required],
        textbook: ['', Validators.required],
        records: ['', Validators.required]
      })
    );
  }

  removeSubject(index: number): void { 
    this.subjectFormArray().removeAt(index); 
  }

  removeAll(){
    const control = <FormArray>this.studentDetailsForm.controls['subject'];
    for(let i = control.length-1; i >= 0; i--) {
        control.removeAt(i)
     }
  }

  clearFormArray = (formArray: FormArray) => {
    while (this.subjectFormArray().length !== 0) {
      this.subjectFormArray().removeAt(0)
    }
  }

  onSubmit():void{
  console.warn(this.studentDetailsForm.value)
  }

}
