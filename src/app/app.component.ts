import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  currentLang: string;

  constructor(
    private translate: TranslateService
  ) { 
    this.currentLang = localStorage.getItem('lang');

    if(this.currentLang === null) {
      this.currentLang = 'English';
    }
    
    this.translate.setDefaultLang(this.currentLang);
    this.translate.use(this.currentLang);
  }
}
