import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Object[] = [];
  lang: string = localStorage.getItem('lang');
  limit: number = 12;
  skip: number = 0;
  isLoading: boolean = true;

  constructor(
    private apiService: ApiService,
    private translate: TranslateService,
    private route: Router
  ) { }

  private async loadingData(): Promise<any> {
    return await this.apiService.get(`posts?app=web&limit=${this.limit}&skip=${this.skip}&lang=${this.lang}`).then((response) => {
      this.posts = response.data.list;
      this.isLoading = false;
    }).catch((error) => {
     if(error) {
       this.isLoading = false;
     }
    });
  }

  public navigate(url: string, urlParams?: any) {
    this.route.navigate([url], {queryParams: { data: urlParams}});
  }

  public imageFailed(post: any) {
    post.photo =  environment.default.image;
  }

  public changePage(type: string) {
    this.isLoading = true;
    
    if(type === 'back' && this.skip > 0) {
      this.skip = this.skip - 1;
    }

    if(type === 'next' && this.posts.length === this.limit) {
      this.skip = this.skip + 1;
    }

    this.loadingData();
  }

  async ngOnInit() {
    this.loadingData();
    this.translate.onLangChange.subscribe((language: any) => {
      this.isLoading = true;
      this.lang = language.lang;
      this.loadingData();
    });
  }


} 
