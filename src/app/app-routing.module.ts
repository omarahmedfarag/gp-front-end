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
import { AggrementComponent } from './profile/aggrement/aggrement.component';
import { HomeComponent } from './adminside/admin/home/home.component';
import { OwnerRequestsComponent } from './adminside/admin/owner-requests/owner-requests.component';
import { ShowrequestComponent } from './adminside/admin/owner-requests/showrequest/showrequest.component';
import { PlacerequestComponent } from './adminside/admin/placerequest/placerequest.component';
import { ReservationComponent } from './profile/reservation/reservation.component';


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
   path:"reserv/:id",
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
      path:"reservation",
      component:ReservationComponent
    }
    ,
    {
      path:"aggrement",
      component:AggrementComponent
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
  component:AdminComponent,
  children:[
    {
      path:"home",
      component:HomeComponent
    },
    {
      path:"owner-requests",
      component:OwnerRequestsComponent
    },
    
    {
      path:"place-requests",
      component:PlacerequestComponent
    }
    ,
    {
      path:"add-place",
      component:NewPlaceComponent
    }
   
    ,
    {
      path:"owner-requests/:id",
      component:ShowrequestComponent
    }
  ]
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
