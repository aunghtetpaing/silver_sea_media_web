import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  sideMenu: any = [
    {
      name: 'Livestock',
      icon: 'livestock.png',
      url: '/articles/all/Livestock'
    },
    {
      name: 'Fishery',
      icon: 'ship.png',
      url: '/articles/all/Fishery'
    },
    {
      name: 'International',
      icon: 'news.png',
      url: ''
    },
    {
      name: 'AgToday',
      icon: 'agtoday.png',
      url: ''
    },
    {
      name: 'Event',
      icon: 'events.png',
      url: ''
    },
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

  constructor(
    private router:Router
  ) { }

  navigate(url: string) {
    this.router.navigate([url]);
  }

  ngOnInit(): void {
  }

}
