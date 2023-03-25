import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'my-movies',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'my-movies', loadChildren: './my-movies/my-movies.module#MyMoviesPageModule' },
  { path: 'movie-list', loadChildren: './movie-list/movie-list.module#MovieListPageModule' },
  { path: 'movie-detail', loadChildren: './movie-detail/movie-detail.module#MovieDetailPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
