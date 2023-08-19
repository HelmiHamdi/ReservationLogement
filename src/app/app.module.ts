import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SingupComponent } from './components/singup/singup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatIconModule } from "@angular/material/icon";
import {MatInputModule  } from "@angular/material/input";
import {MatSelectModule  } from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {MatTableModule} from "@angular/material/table"
import {MatPaginatorModule} from "@angular/material/paginator"
import {MatSortModule} from "@angular/material/sort"
import {MatDialogModule} from "@angular/material/dialog"
import {MatCheckboxModule} from "@angular/material/checkbox"
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { HoteComponent } from './components/hote/hote.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from "ngx-toastr";
import {ReactiveFormsModule} from '@angular/forms';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DialogComponent } from './components/dialog/dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';

// import {library} from "fortawesome-svg-core";
// import {faChevronRight , faChevronDown} from "@fortawesome/free-solid-svg-icons";
// library.add(faChevronRight);
// library.add(faChevronDown);
@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    HomeComponent,
    LoginComponent,
    SingupComponent,
    DashboardComponent,
    NavComponent,
    HoteComponent,
    ContactComponent,
    ProfileComponent,
    ChangepasswordComponent,
    ToolbarComponent,
    DialogComponent,
    AboutUsComponent,
    FooterComponent,
    ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule ,
    MatSelectModule ,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatCardModule,
    MatDatepickerModule,
    MatToolbarModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
