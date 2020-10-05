import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-directory-detail',
  templateUrl: './directory-detail.component.html',
  styleUrls: ['./directory-detail.component.css']
})
export class DirectoryDetailComponent implements OnInit {

  isLoading: boolean = true;
  category_id: number;
  directory: any[] = [];
  categoryName: string = '';
  filter: any = {
    location: 0
  };

  limit: number = 30;
  skip: number = 0;

  constructor(
    private api: ApiService,
    private activeRoute: ActivatedRoute
  ) { }
  
  private async loadingData(): Promise<any> {
    this.category_id = this.activeRoute.snapshot.params.id;
    await this.api.get(`/directory/${this.category_id}?app=web&limit=${this.limit}&skip=${this.skip}`).then((res) => {
      this.directory = res.data;
    });

    await this.api.get('/categories?app=web').then((res) => {
      res.data.map((value: any) => {
        if(value.id === Number(this.category_id)) {
          this.categoryName = value.name;
        }
      });

      this.isLoading = false;
    });
    
  }

  public async getMore(): Promise<any> {
    this.isLoading =true;
    this.skip = this.skip + 1;
    return await this.api.get(`/directory/${this.category_id}?app=web&limit=${this.limit}&skip=${this.skip}`).then((res) => {
      this.directory = this.directory.concat(res.data);
      this.isLoading = false;
    });
  }

  async ngOnInit() {
    await this.loadingData();
  }

}
