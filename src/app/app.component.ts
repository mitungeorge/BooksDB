import { Component } from '@angular/core';
import {RatingModule} from "ngx-rating";
import { QueryService } from './services/query.service';
import { MatTableModule } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Books Search';
  rating: number;
  zero: number = 0;
  min: number = 0;
  max: number = 1000;
  price: number;
  books: any;
  displayedColumns = ['bookid', 'id', 'title'];
  isbnSet: boolean = false;
  authorSet: boolean = false;
  titleSet: boolean = false;
  reviewSet: boolean = false;
  priceSet: boolean = false;


  constructor(private _queryService: QueryService){
  	this.rating = 0;
  }

  update(simpleSlider, $event){
  	this.price = $event.from;
  }

  search(){
  	this._queryService.searchBooks().subscribe(data => this.handleSuccess(data));
  }

  handleSuccess(books){
  	this.books = books;
  }

  isbnChecked(eve: any){
  	this.isbnSet = !this.isbnSet;
  }

  authorChecked(){
  	this.authorSet = !this.authorSet;
  }

  titleChecked(){
  	this.titleSet = !this.titleSet;
  }

  reviewsChecked(){
  	this.reviewSet = !this.reviewSet;
  }

  priceChecked(){
  	this.priceSet = !this.priceSet;
  }
  
}
