import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { MatDialogRef,MAT_DIALOG_DATA } from "@angular/material/dialog";
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  reserveForm !:FormGroup;
  actionBtn:string="Save";
  constructor(private formBuilder: FormBuilder, private apiRes: AuthService,
    @Inject(MAT_DIALOG_DATA) public editData:any,
    private toastr:ToastrService , private dialogRef : MatDialogRef<DialogComponent>){}
  ngOnInit(): void {
   this.reserveForm = this.formBuilder.group({
    id:this.formBuilder.control(''),
    id_user :this.formBuilder.control('',Validators.required),
    id_logement:this.formBuilder.control('',Validators.required),
    firstDate:this.formBuilder.control('',Validators.required),
    lastDate:this.formBuilder.control('',Validators.required)
   });
   if (this.editData) {
    this.actionBtn = "Update";
    this.reserveForm.controls['id_user'].setValue(this.editData.id_user);
    this.reserveForm.controls['id_logement'].setValue(this.editData.id_logement);
    this.reserveForm.controls['firstDate'].setValue(this.editData.firstDate);
    this.reserveForm.controls['lastDate'].setValue(this.editData.lastDate);

  }
  }
  addReservation(){
   if (!this.editData) {
    if (this.reserveForm.valid) {
      this.apiRes.postReservation(this.reserveForm.value).subscribe({
        next:(res)=>{
          this.toastr.success('Reservation add successfully');
          this.reserveForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          this.toastr.error('Error while adding the reservation');
        }
      })
    } else {
      this.toastr.warning('Please enter a valid data');
    }
   }else{
    this.updateReservation();
   }
  }
  updateReservation(){
    this.apiRes.putReservation(this.reserveForm.value,this.editData.id).subscribe({
      next:(res)=>{
        this.toastr.success("Reservation updated Successfully");
        this.reserveForm.reset();
        this.dialogRef.close('update');
      },
      error:(err)=>{
        this.toastr.error('Error while updating the reservation');
      }
    })
  }
}
