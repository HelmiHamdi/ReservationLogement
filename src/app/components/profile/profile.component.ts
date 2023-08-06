import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  image = "assets/profile.jpg";
  Prenom : String = "Helmi";
  Nom : String = "Hamdi";
  Tele : number = 27128539;
  Email : String = "helmihamdi977@gmail.com"
  DateNaissance: Date = new Date('1999-04-04');
  ngOnInit(): void {
    
  }

  ImageUpload(event:any){
   const file:File = event.target.files[0];
  }
  constructor(private router:Router){

  }
  modifierMotDePasse():void{
   this.router.navigate(['change']);
  }
}
