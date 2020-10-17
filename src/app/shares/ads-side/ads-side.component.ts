import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ads-side',
  templateUrl: './ads-side.component.html',
  styleUrls: ['./ads-side.component.css']
})
export class AdsSideComponent implements OnInit {

  ads_side: any = {};
  ads_block_start: any = {};
  ads_block_middle: any = {};
  ads_block_end: any = {};

  constructor(
    private api: ApiService
  ) { }

  async ngOnInit() {
    await this.loadingData();
  }

  private async loadingData() {
    return await this.api.get('ads').then((result) => {
      result.data.filter((value: any) => {

        if(value.type === 'side') {
          this.ads_side = value;
          this.ads_side.photo = `${environment.public}/ads/${value.photo}`;
        }

        if(value.type === 'start') {
          this.ads_block_start = value;
          this.ads_block_start = `${environment.public}/ads/${value.photo}`;
        }

        if(value.type === 'middle') {
          this.ads_block_middle = value;
          this.ads_block_middle = `${environment.public}/ads/${value.photo}`;
        }

        if(value.type === 'end') {
          this.ads_block_end = value;
          this.ads_block_end = `${environment.public}/ads/${value.photo}`;
        }
      });
    });
  }

}
