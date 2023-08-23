import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { User } from 'src/app/sidenav/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  formValue!:FormGroup;
  usermodelobj :User = new User ;
  alluserdata:any;
   image = "assets/profile.jpg";
   showadd!:boolean;
   showupdate!:boolean;
   add(){
    this.showadd=true;
    this.showupdate=false;
    }
    edit(data:any){
      this.showadd=false;
      this.showupdate=true;
      this.usermodelobj.id=data.id;
      this.formValue.controls['nom'].setValue(data.nom);
      this.formValue.controls['prenom'].setValue(data.prenom);
      this.formValue.controls['dateNaissance'].setValue(data.dateNaissance);
      this.formValue.controls['email'].setValue(data.email);
      this.formValue.controls['password'].setValue(data.password);
      this.formValue.controls['phone'].setValue(data.phone);
    
    }
Update(){

} 
  // Prenom : String = "Helmi";
  // Nom : String = "Hamdi";
  // Tele : number = 27128539;
  // Email : String = "helmihamdi977@gmail.com"
  // DateNaissance: Date = new Date('1999-04-04');
  constructor(private router:Router,private toastr:ToastrService,private formBuilder:FormBuilder, private api : AuthService){

  }
  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      id:this.formBuilder.control(''),
      nom:this.formBuilder.control('',Validators.required),
      prenom:this.formBuilder.control('',Validators.required),
      dateNaissance:this.formBuilder.control('',Validators.required),
      email:this.formBuilder.control('',Validators.compose([Validators.required,Validators.email])),
      password:this.formBuilder.control('',Validators.compose([Validators.required])),
      phone:this.formBuilder.control('',Validators.compose([Validators.required])),
      gender:this.formBuilder.control('male'),
      role:this.formBuilder.control('admin'),
      isactive:this.formBuilder.control(false)
     });
     this.getUser();
  }
  
  getUser(){
    this.api.getuser().subscribe(res=>{
        this.alluserdata=res;
    })
  }
  ImageUpload(event:any){
   const file:File = event.target.files[0];
  }

  modifierMotDePasse():void{
   this.router.navigate(['corps/change']);
  }
}
