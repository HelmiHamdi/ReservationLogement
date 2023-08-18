import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
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
  constructor(private builder:FormBuilder,private service:AuthService,private router:Router,private toastr:ToastrService){

  }
  registerform=this.builder.group({
    id:this.builder.control(''),
    nom:this.builder.control('',Validators.required),
    prenom:this.builder.control('',Validators.required),
    dateNaissance:this.builder.control('',Validators.required),
    email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    password:this.builder.control('',Validators.compose([Validators.required])),
    phone:this.builder.control('',Validators.compose([Validators.required])),
    gender:this.builder.control('male'),
    role:this.builder.control(''),
    isactive:this.builder.control(false)
  });
 
  proceedregisteration(){
    if (this.registerform.valid) {
      this.service.Proceedregister(this.registerform.value).subscribe(res=>{
       this.toastr.success('Please contact admin for enable access','Registered Successfully');
       this.router.navigate(['login']);
      })
    }else{
       this.toastr.warning('Please enter valid data');
    }
  }
}
/*,Validators.pattern('(?=,*[a-z])(?=,*[A-Z])(?=,*[0-9])(?=,*[$@$!%*?&])[A-Za-z\d$@$!%*?&],{8,}')*/