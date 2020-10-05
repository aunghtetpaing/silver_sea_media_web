import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SharesModule } from './shares/shares.module';
import { RouterModule } from '@angular/router';
import { HomeModule } from './pages/home/home.module';
import { ArticlesModule } from './pages/articles/articles.module';
import { DirectoryModule } from './pages/directory/directory.module';

import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    HomeModule,
    RouterModule,
    DirectoryModule,
    ArticlesModule,
    SharesModule,
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})

export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}