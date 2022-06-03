import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';


import { Store } from '@ngrx/store';
import { increment, decrement, reset } from "./counter.action";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent implements OnInit{
toppings = new FormControl();
toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
count: any;
constructor(public store:Store<any>){}

ngOnInit() {
this.store.select('count').subscribe((c)=>{
  this.count = c;
})
  //console.log(this.greeting( 'A','B','C'));
}

  inc() {
    this.store.dispatch(increment());
  }
  dec() {
    this.store.dispatch(decrement());
  }
reset(){
  this.store.dispatch(reset());
  }
}
