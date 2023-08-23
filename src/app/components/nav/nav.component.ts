import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() sideNavStatus:boolean=false;
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
      name: 'Person',
      icon: 'fa-solid fa-user',
      url:'/user',
    },
    {
      number: '7',
      name: 'Reservation',
      icon: 'fa-solid fa-university',
      url:'/bar',
    },
  ]
  ngOnInit(): void {
    
  }
  constructor(){}


}
