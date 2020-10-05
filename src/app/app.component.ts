import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  currentLang: string;

  constructor(
    private translate: TranslateService,
    private cookieService: CookieService
  ) { 
    this.currentLang = localStorage.getItem('lang');

    if(this.currentLang === null) {
      localStorage.setItem('lang', 'English');
      this.currentLang = 'English';
    }
    
    this.translate.setDefaultLang(this.currentLang);
    this.translate.use(this.currentLang);
  }

  ngOnInit(): void {
    this.cookieService.set('SameSite', 'None');
  }
}
