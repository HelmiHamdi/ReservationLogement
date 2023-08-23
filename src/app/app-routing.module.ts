import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';

import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { HoteComponent } from './components/hote/hote.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { LogementComponent } from './components/logement/logement.component';
import { AminrevComponent } from './components/aminrev/aminrev.component';
import { CorpsComponent } from './sidenav/corps/corps.component';
import { SideComponent } from './sidenav/side/side.component';
import { TitreComponent } from './sidenav/titre/titre.component';
import { UserComponent } from './sidenav/user/user.component';
import { PersonComponent } from './sidenav/person/person.component';













const routes: Routes = [


  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'singup',component:SingupComponent},
 
  {path:'header',component:HeaderComponent},
  {path:'nav',component:NavComponent},
  {path:'hote',component:HoteComponent},
   
  
 
  {path:'bar',component:ToolbarComponent},
  {path:'tab',component:TableauComponent},
  {path:'gghh',component:LogementComponent},
  {path:'user',component:UserComponent},
  {path:'corps',component:CorpsComponent,
    children:[
    
      {path:'pers',component:PersonComponent},
      {path:'about',component:AboutUsComponent},
      {path:'contact',component:ContactComponent},
      {path:'profile',component:ProfileComponent},
     {path:'change',component:ChangepasswordComponent},
      
    ]},
  {path:'titre',component:TitreComponent},
  {path:'side',component:SideComponent}
   /********************************** */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[
  // UserComponent,
  PersonComponent,
  AboutUsComponent,
  ContactComponent,
  ProfileComponent,
  
]