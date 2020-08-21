import { SharedModule } from './shared/shared.module';
//import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostsService } from './shared/services/posts.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import{ httpInterceptorProviders } from './shared/interceptors'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,
    NgbModule,SharedModule,HttpClientModule
   // AngularFontAwesomeModule
  ],
  providers: [PostsService,httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
