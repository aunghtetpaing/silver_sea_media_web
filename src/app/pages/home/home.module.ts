import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharesModule } from 'src/app/shares/shares.module';
import { TranslateModule } from '@ngx-translate/core';

import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule.forChild(),
    RouterModule,
    SharesModule
  ],
  exports: []
})
export class HomeModule { }

