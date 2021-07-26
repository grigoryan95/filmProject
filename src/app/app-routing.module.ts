import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FilmsComponent} from "./films/films.component";
import {HomeComponent} from "./home/home.component";
import {AppComponent} from "./app.component";
import {PostsComponent} from "./posts/posts.component";

const routes: Routes = [
  {path: '', redirectTo: 'cinema', pathMatch: 'full'},
  // {path: '', component: AppComponent},
  {path: 'films',component: FilmsComponent},
  {path: 'cinema', component: HomeComponent},
  {path: 'posts', component: PostsComponent},
  {path: '**', redirectTo: 'cinema'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
