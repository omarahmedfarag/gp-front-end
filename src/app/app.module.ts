import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgwWowModule } from 'ngx-wow';

import {MatSliderModule} from '@angular/material/slider';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



import { PlacesComponent } from './main_places/places/places.component';
import { PlaceComponent } from './main_places/place/place.component';
import { ShowPlaceComponent } from './main_places/show-place/show-place.component';
import { FilterPipe } from './Shared/filter.pipe';
import {FormsModule ,ReactiveFormsModule} from "@angular/forms";
import { BarRatingModule } from "ngx-bar-rating";
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewPlaceComponent } from './owner/new-place/new-place.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthIntercepter } from './auth/auth-intercepter';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminComponent } from './adminside/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent,
    PlaceComponent,
    ShowPlaceComponent,
    FilterPipe,
    HeaderComponent,
    NewPlaceComponent,
    LoginComponent,
    ProfileComponent,
    SignupComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BarRatingModule,
    NgwWowModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatChipsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatMenuModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthIntercepter,multi:true},AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
