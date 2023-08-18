import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  ngOnInit(): void {

  }
  @Input() isReadMore : boolean = false;
  public isCollapsed : boolean = true;

}
