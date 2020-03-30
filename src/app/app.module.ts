import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgwWowModule } from 'ngx-wow';


import { PlacesComponent } from './main_places/places/places.component';
import { PlaceComponent } from './main_places/place/place.component';
import { ShowPlaceComponent } from './main_places/show-place/show-place.component';
import { FilterPipe } from './Shared/filter.pipe';
import {FormsModule} from "@angular/forms";
import { BarRatingModule } from "ngx-bar-rating";
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent,
    PlaceComponent,
    ShowPlaceComponent,
    FilterPipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BarRatingModule,
    NgwWowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
