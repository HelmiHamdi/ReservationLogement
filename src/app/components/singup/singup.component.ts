import { Component } from '@angular/core';
import { FormBuilder,Validator, Validators } from "@angular/forms";
@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {
  visible:boolean=true;
  changetype:boolean=true;
  viewPass(){
   this.visible = !this.visible;
   this.changetype =!this.changetype;
  }
  constructor(private builder:FormBuilder){

  }
  registerfrom=this.builder.group({
    id:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(8)])),
    nom:this.builder.control('',Validators.required),
    prenom:this.builder.control('',Validators.required),
    dateNaissance:this.builder.control('',Validators.compose([Validators.required,Validators.pattern('(?=,*[a-z])(?=,*[A-Z])(?=,*[0-9])(?=,*[$@$!%*?&])[A-Za-z\d$@$!%*?&],{8,}')])),
    email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    password:this.builder.control('',Validators.required),
    gender:this.builder.control('male'),
    role:this.builder.control(''),
    isactive:this.builder.control(false)
  });
  proceedregisteration(){
    if (this.registerfrom.valid) {
      
    }else{
      
    }
  }
}
