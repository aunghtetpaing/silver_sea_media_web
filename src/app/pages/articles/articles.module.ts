import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { SharesModule } from 'src/app/shares/shares.module';
import { ArticlesAllComponent } from './articles-all/articles-all.component';


@NgModule({
  declarations: [ 
    ArticleDetailComponent, ArticlesAllComponent 
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    SharesModule
  ],
  exports: [
    ArticleDetailComponent
  ]
})
export class ArticlesModule { }
