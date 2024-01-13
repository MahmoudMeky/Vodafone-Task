import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { UserPageComponent } from './Pages/user-page/user-page.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user/:userId', component: UserPageComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
