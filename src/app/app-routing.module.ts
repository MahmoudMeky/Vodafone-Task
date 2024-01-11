import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './Components/post/post.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user/:id', component: PostComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
