import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from "ngx-rating";
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MatTableModule } from '@angular/material';
import { IonRangeSliderModule } from "ng2-ion-range-slider";


import { AppComponent } from './app.component';
import { QueryService } from './services/query.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RatingModule,
    CommonModule,
    HttpModule,
    MatTableModule,
    IonRangeSliderModule
  ],
  providers: [
    QueryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
