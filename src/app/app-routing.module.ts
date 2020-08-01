import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceComponent } from './main_places/place/place.component';
import { PlacesComponent } from './main_places/places/places.component';
import { ShowPlaceComponent } from './main_places/show-place/show-place.component';
import { NewPlaceComponent } from './owner/new-place/new-place.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  

  {
   path:"Home",
   component:PlaceComponent
 }

 ,
 { path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },

 {
   path:"places",
   component:PlacesComponent
 }
 ,
 {
   path:"show/:id",
   component:ShowPlaceComponent
 }
 ,
 {
   path:"owner/newplace",
   component:NewPlaceComponent
 }
 ,
 {
  path:"user/profile",
  component:ProfileComponent
}
,
{
  path:"user/:registerMode",
  component:LoginComponent
}
 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
