import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HoteComponent } from './components/hote/hote.component';

const routes: Routes = [
  {path:'',component:HeaderComponent},
  {path:'home',component:HomeComponent},
  {path:'hote',component:HoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
