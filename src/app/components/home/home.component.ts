import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private service: AuthService){}
  logData:any;
  ngOnInit(): void {
   this.logData=this.service.logDetails;
  }

}
