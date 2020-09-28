import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  navMenu: any = [
    { name: 'AgToday', icon: 'agtoday.png', url: '' },
    { name: 'Livestock', icon: 'livestock.png', url: '/articles/all/Livestock' },
    { name: 'Fishery', icon: 'ship.png', url: '/articles/all/Fishery' },
    { name: 'International', icon: 'news.png', url: '/articles/all/International' },
    { name: 'Event', icon: 'events.png', url:  '/articles/all/Event' },
    {
      name: 'Market Price',
      icon: 'market-price.png',
      url: ''
    },
    {
      name: 'Directory',
      icon: 'directory.png',
      url: ''
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
