import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QueryService {

  constructor(private _http : Http) { }

  searchBooks(){
  	return this._http.get('https://jsonplaceholder.typicode.com/posts').map(res => res.json());
  }

}
