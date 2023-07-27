import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HoteComponent } from './components/hote/hote.component';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';


const routes: Routes = [

  {path:'',component:HeaderComponent},
  {path:'hote',component:HoteComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'singup',component:SingupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'side-nav',component:SideNavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
