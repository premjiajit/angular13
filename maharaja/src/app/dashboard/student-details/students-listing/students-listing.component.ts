import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { StudentApiService } from '../services/student-api.service';

export interface PeriodicElement {
  completed: any;
  id: number;
  title: string;
  userId: number;
}
@Component({
  selector: 'app-students-listing',
  templateUrl: './students-listing.component.html',
  styleUrls: ['./students-listing.component.scss']
})
export class StudentsListingComponent implements OnInit, AfterViewInit {
  dataSource: any;
  displayedColumns = ['id', 'userId', 'title', 'completed'];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(public studentApi: StudentApiService, public http: HttpClient) { }

  ngOnInit(): void {
    this.loadTableData();
  }

  loadTableData() {
    this.studentApi.getToDoList().subscribe((res: PeriodicElement[]) => {
      console.table(res);
      const ELEMENT_DATA: PeriodicElement[] = res;
      this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
      this.dataSource.paginator = this.paginator; // to set paginators
    });
  }
  ngAfterViewInit() {
   // this.dataSource.paginator = this.paginator;
  }
}