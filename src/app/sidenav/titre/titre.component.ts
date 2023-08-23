import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-titre',
  templateUrl: './titre.component.html',
  styleUrls: ['./titre.component.css']
})
export class TitreComponent {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean=false;
  SideNavToggle(){
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }
}
