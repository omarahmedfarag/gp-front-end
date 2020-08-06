import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceComponent } from './main_places/place/place.component';
import { PlacesComponent } from './main_places/places/places.component';
import { ShowPlaceComponent } from './main_places/show-place/show-place.component';
import { NewPlaceComponent } from './owner/new-place/new-place.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/auth.guard';
import { UserInfoComponent } from './profile/user-info/user-info.component';
import { FavoriteComponent } from './profile/favorite/favorite.component';
import { AdminComponent } from './adminside/admin/admin.component';
import { RequestComponent } from './profile/request/request.component';


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
   component:PlacesComponent,
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
  path:"user",
  component:ProfileComponent,
  children:[
    {
      path:"add-place",
      component:NewPlaceComponent
    },
    {
      path:"user-info",
      component:UserInfoComponent
    }
    ,
    {
      path:"favorite",
      component:FavoriteComponent
    }
    ,
    {
      path:"request-to-be-owner",
      component:RequestComponent
    }
  ]
}
,
{
  path:"Cpanal",
  component:AdminComponent
}
,
{
  path:"account/login",
  component:LoginComponent
}
,
{
  path:"account/signup",
  component:SignupComponent
  
  
}
 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
