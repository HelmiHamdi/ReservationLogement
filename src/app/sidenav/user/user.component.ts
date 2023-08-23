import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.model';
import { AuthService } from 'src/app/service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  showadd!:boolean;
  showupdate!:boolean;
  formValue!:FormGroup;
  usermodelobj :User = new User ;
  alluserdata:any;
  constructor(private toastr:ToastrService,private formBuilder:FormBuilder, private api : AuthService){

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
  this.formValue.controls['gender'].setValue(data.gender);
}
Update(){
  this.usermodelobj.nom=this.formValue.value.nom;
  this.usermodelobj.prenom=this.formValue.value.prenom;
  this.usermodelobj.dateNaissance=this.formValue.value.dateNaissance;
  this.usermodelobj.email=this.formValue.value.email;
  this.usermodelobj.password=this.formValue.value.password;
  this.usermodelobj.phone=this.formValue.value.phone;
  this.usermodelobj.gender=this.formValue.value.gender;
  this.api.updateuser(this.usermodelobj,this.usermodelobj.id).subscribe(res=>{
  this.formValue.reset();
  this.getUser();
    this.toastr.success('Record Updated succefully');
  },
  err=>{
    this.toastr.error('Something went worng !!!');
  }
  )
}
addUser(){
  if (this.formValue.valid) {
    
  
  this.usermodelobj.nom=this.formValue.value.nom;
  this.usermodelobj.prenom=this.formValue.value.prenom;
  this.usermodelobj.dateNaissance=this.formValue.value.dateNaissance;
  this.usermodelobj.email=this.formValue.value.email;
  this.usermodelobj.password=this.formValue.value.password;
  this.usermodelobj.phone=this.formValue.value.phone;
  this.usermodelobj.gender=this.formValue.value.gender;
  this.api.postuser(this.usermodelobj).subscribe(res=>{

   console.log(res);
   this.formValue.reset();
   this.getUser();
    this.toastr.success('Record added sucessfully');
  },
  err=>{
    this.toastr.error('Something went wrong !!!');
  }
  )}else{
    this.toastr.warning('Please Enter a Valid data');
  }
}

getUser(){
  this.api.getuser().subscribe(res=>{
      this.alluserdata=res;
  })
}
deleteUser(data:any){
  if (confirm('Are you sure to delete?'))
  this.api.deleteuser(data.id).subscribe(res=>{
    this.toastr.success('Record deleted sucessfully');
    this.getUser();
  },
  erro=>{
    this.toastr.error('Something went wrong !!!');
  }
  )
}
printThisPage(){
  window.print();
}
}
