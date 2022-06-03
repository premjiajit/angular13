
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { increment, decrement, reset } from "./counter.action";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  count: any;
  constructor(public store:Store<any>, private cdr:ChangeDetectorRef){
  //  this.cdr.detach();
  }

  ngOnInit(): void {
    this.store.select('count').subscribe((c)=>{
      this.count = c;
    });
    
    setTimeout(()=>{
    //this.cdr.checkNoChanges();
    }, 2000);
  }

}
