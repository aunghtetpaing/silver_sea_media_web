import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectoryDetailComponent } from './directory-detail/directory-detail.component';
import { DirectoryComponent } from './directory.component';

const routes: Routes = [
  {
    path: '',
    component: DirectoryComponent
  },

  { 
    path: 'directory/:id',
    component: DirectoryDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectoryRoutingModule { }
