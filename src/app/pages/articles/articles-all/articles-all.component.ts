import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-articles-all',
  templateUrl: './articles-all.component.html',
  styleUrls: ['./articles-all.component.css']
})
export class ArticlesAllComponent implements OnInit {

  posts: any[] = [];
  limit: number = 12;
  skip: number = 0;
  lang: string = localStorage.getItem('lang');

  isLoading: boolean = true;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private api: ApiService
  ) { }

  async loadingData(): Promise<any> {
    return await this.api.get(`posts?app=web&limit=${this.limit}&skip=${this.skip}&lang=${this.lang}&type=${this.activeRoute.snapshot.params.type}`).then((result) => {
      this.posts = result.data.list;
      this.isLoading = false;
      return null;
    }).catch((error) => {
      if(error) {
        this.isLoading = false;
        return null;
      }
    });
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
  
  public imageFailed(post: any) {
    post.photo =  environment.default.image;
  }

  public navigate(url: string, urlParams?: any) {
    this.router.navigate([url], {queryParams: { data: urlParams}});
  }

  ngOnInit() {
    this.loadingData();
    this.activeRoute.params.subscribe((result) => {
      this.isLoading = true;
      return this.loadingData();
    });
  }

}
