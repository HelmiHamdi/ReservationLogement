import { Component, OnInit ,ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { AuthService } from 'src/app/service/auth.service';
import { ToastrService } from 'ngx-toastr';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit{
  displayedColumns: string[] = ['id', 'id_user', 'id_logement', 'firstDate','lastDate','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog : MatDialog , private apiRes : AuthService,private toastr:ToastrService ){}
  ngOnInit(): void {
    this.getAllReservation();
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
     width:"30%"
    }).afterClosed().subscribe(val=>{
      if (val === 'save') {
        this.getAllReservation();
      }
    })
  }
getAllReservation(){
 this.apiRes.getReservation().subscribe({
  next:(res:any)=>{
    this.dataSource = new MatTableDataSource(res);
    this.dataSource.paginator=this.paginator; 
    this.dataSource.sort=this.sort; 
  },
  error:(err)=>{
  this.toastr.error("Error while fatching the Records!!!")
  }
 })
}
editReservation(row:any){
  this.dialog.open(DialogComponent,{
    width:'30%',
    data:row
  }).afterClosed().subscribe(val=>{
    if (val === 'update') {
      this.getAllReservation();
    }
  })
}
deleteReservation(id:number){
this.apiRes.deleteReservation(id).subscribe({
  next:(res)=>{
    this.toastr.success("Reservation Deleted Successfully");
    this.getAllReservation();
  },
  error:()=>{
    this.toastr.error('Error while deleting the Records!!!')
  }
})
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

}
