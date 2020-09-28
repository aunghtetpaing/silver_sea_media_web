import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

export interface Ads {
  id?: number;
  photo: string;
  type: string;
  link: string;
  count: number;
  active: boolean;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ads: any = {};

  constructor(
    private api: ApiService
  ) { }

  private async loadingData() {
    return await this.api.get('ads').then((result: any) => {
      result.data.filter((value: Ads) => {
        if(value.type === 'header') {
          this.ads = value;
          this.ads.photo = `${environment.public}/ads/${value.photo}`;
        }
      });
    });
  }

  async ngOnInit() {
    await this.loadingData();
  }

}
