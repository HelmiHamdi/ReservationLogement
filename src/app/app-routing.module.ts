import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { HoteComponent } from './components/hote/hote.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';






const routes: Routes = [


  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'singup',component:SingupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'header',component:HeaderComponent},
  {path:'nav',component:NavComponent},
  {path:'hote',component:HoteComponent},
  {path:'contact',component:ContactComponent},
  {path:'profile',component:ProfileComponent},
  {path:'change',component:ChangepasswordComponent},
  {path:'about',component:AboutUsComponent},

  {path:'',component:ToolbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
