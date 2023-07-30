import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { HoteComponent } from './components/hote/hote.component';
import { ContactComponent } from './contact/contact.component';




const routes: Routes = [


  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'singup',component:SingupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'',component:HeaderComponent},
  {path:'nav',component:NavComponent},
  {path:'hote',component:HoteComponent},
  {path:'contact',component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
