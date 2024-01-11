import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PostComponent } from './Components/post/post.component';
import { MainLayoutComponent } from './Layouts/main-layout/main-layout.component';
import { HomeComponent } from './Components/home/home.component';
import { CommentComponent } from './Components/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    MainLayoutComponent,
    HomeComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
