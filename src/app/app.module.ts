import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PostComponent } from './Components/post/post.component';
import { MainLayoutComponent } from './Layouts/main-layout/main-layout.component';
import { HomeComponent } from './Pages/home/home.component';
import { CommentComponent } from './Components/comment/comment.component';
import { UserPageComponent } from './Pages/user-page/user-page.component';
import { UserService } from './Services/user.service';
import { CommentService } from './Services/comment.service';
import { PostService } from './Services/post.service';
import { LoadingComponent } from './Components/Shared/UI/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    MainLayoutComponent,
    HomeComponent,
    CommentComponent,
    UserPageComponent,
    LoadingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [UserService, PostService, CommentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
