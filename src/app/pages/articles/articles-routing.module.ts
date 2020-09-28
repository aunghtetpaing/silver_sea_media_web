import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticlesAllComponent } from './articles-all/articles-all.component';

const routes: Routes = [
  {
    path: ':id',
    component: ArticleDetailComponent
  },

  {
    path: 'all/:type',
    component: ArticlesAllComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
