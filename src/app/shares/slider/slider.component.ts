import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

export interface Slider {
  id?: number;
  name: string;
  active: number;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  sliders: any = [];

  constructor(
    private api: ApiService
  ) { }

  private async loadingData():Promise<any> {
    return await this.api.get('slider').then((result: any) => {
      result.data.map((value: Slider) => {
        if(value.active === 1) {
          value.name = `${environment.public}/slider/${value.name}`;
          this.sliders.push(value);
        }
      });
    });
  }

  async ngOnInit() {
    await this.loadingData();
  }

}
