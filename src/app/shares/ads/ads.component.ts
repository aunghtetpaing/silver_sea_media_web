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
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  
  ads_fullwith: any = {};
  ads_block_start: any = {};
  ads_block_middle: any = {};
  ads_block_end: any = {};

  constructor(
    private api: ApiService
  ) { }

  private async loadingData() {
    return await this.api.get('ads').then((result) => {
      result.data.filter((value: Ads) => {

        if(value.type === 'fullwith') {
          this.ads_fullwith = value;
          this.ads_fullwith.photo = `${environment.public}/ads/${value.photo}`;
        }
      });
    });
  }

  async ngOnInit() {
    await this.loadingData();
  }

}
