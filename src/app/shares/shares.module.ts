import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SliderComponent } from './slider/slider.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { LanguageComponent } from './language/language.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './loading/loading.component';
import { AdsComponent } from './ads/ads.component';
import { AdsSideComponent } from './ads-side/ads-side.component';

const component = [
  LoadingComponent,
  HeaderComponent, 
  NavigationComponent, 
  SliderComponent, 
  SidemenuComponent,
  LanguageComponent,
  FooterComponent,
  AdsComponent,
  AdsSideComponent
]

@NgModule({
  declarations: component,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forChild(),
  ],
  exports: component
})

export class SharesModule { }