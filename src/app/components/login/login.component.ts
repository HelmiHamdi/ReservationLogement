import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private builder:FormBuilder,private service:AuthService,private router:Router,private toastr:ToastrService){
    sessionStorage.clear();
  }
visible:boolean=true;
changetype:boolean=true;
viewPass(){
 this.visible = !this.visible;
 this.changetype =!this.changetype;
}
loginform=this.builder.group({
  email:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
  password:this.builder.control('',Validators.required)
});

login(){
  if (this.loginform.valid) {
    this.service.GetbyCode(this.loginform.value).subscribe((res: any)=>{
     const user = res.find((a:any)=>{
      return a.email === this.loginform.value.email && a.password === this.loginform.value.password;
     });
     if (user) {
      this.toastr.success('Login Successfully');
      this.loginform.reset();
      this.router.navigate(['home']);
     }else{
      this.toastr.error('user not found');
     }
    })
  }else{
     this.toastr.warning('Please enter valid data');
  }
}
}

