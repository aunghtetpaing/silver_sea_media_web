import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectoryRoutingModule } from './directory-routing.module';
import { DirectoryComponent } from './directory.component';
import { SharesModule } from 'src/app/shares/shares.module';
import { DirectoryDetailComponent } from './directory-detail/directory-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DirectoryComponent, DirectoryDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    DirectoryRoutingModule,
    SharesModule
  ],
  exports: [
    DirectoryDetailComponent
  ]
})
export class DirectoryModule { }
