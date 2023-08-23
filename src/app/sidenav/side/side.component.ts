import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit{
  ngOnInit(): void {
  
  }
  @Input() sideNavStatus:boolean = false;
 list = [
  
    {
      number: '1',
      name: 'home',
      icon: 'fa-solid fa-house',
      url:'/home',
    },
    {
      number: '2',
      name: 'Analytics',
      icon: 'fa-solid fa-chart-line',
      url:'#',
    },
    {
      number: '3',
      name: 'Products',
      icon: 'fa-solid fa-box',
      url:'#',
    },
    {
      number: '4',
      name: 'Order',
      icon: 'fa-solid fa-cart-shopping',
      url:'#',
    },
    {
      number: '5',
      name: 'Settings',
      icon: 'fa-solid fa-gear',
      url:'#',
    },
    {
      number: '6',
      name: 'About',
      icon: 'fa-solid fa-circle-info',
      url:'./about',
    },
    {
      number: '7',
      name: 'Contact',
      icon: 'fa-solid fa-phone',
      url:'./contact',
    },
  
 ];
}
