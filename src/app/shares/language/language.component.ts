import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
  }

  langChange(lang: string) {
    if(localStorage.getItem('lang') !== lang) {
      this.translate.use(lang);
      localStorage.setItem('lang', lang);
    }
  }
}
