import { Component } from '@angular/core';

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
}
