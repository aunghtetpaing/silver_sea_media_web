import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  navMenu: any = [
    { name: 'Home', icon: 'agtoday.png', url: '' },
    { name: 'Livestock', icon: 'livestock.png', url: '/articles/all/Livestock' },
    { name: 'Fishery', icon: 'ship.png', url: '/articles/all/Fishery' },
    { name: 'Agriculture', icon: 'news.png', url: '/articles/all/Agriculture' },
    { name: 'Event', icon: 'events.png', url:  '/articles/all/Event' },
    { name: 'Directory', icon: '', url: '/directory' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
