import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  isLoading: boolean = true;
  article: any = {};

  constructor(
    private activeRoute: ActivatedRoute,
    private api: ApiService
  ) { }

  private async loadingData() {
    return await this.api.get(`posts/${this.activeRoute.snapshot.params.id}`).then((result) => {
      this.isLoading = false;
      this.article = result.data;
    }).catch((error) => {
      if(error) {
        this.isLoading = false;
      }
    })
  }

  imageFailed(post: any) {
    post.photo =  environment.default.image;
  }

  async ngOnInit() {
    await this.loadingData();
    console.log(this.article);
  }

}
