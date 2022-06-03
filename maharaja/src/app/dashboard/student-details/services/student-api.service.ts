import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from 'src/app/core/services/Api/api.service';

@Injectable({
  providedIn: 'root'
})
export class StudentApiService {

  constructor( public extApi: ApiService) { }

  getToDoList() : Observable<any>{
    const dummypath = 'https://jsonplaceholder.typicode.com/todos';
   return this.extApi.get(dummypath);
  }
}
