import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'persons', loadChildren: () => import('./pages/persons/persons.module').then(m => m.PersonsModule)},
  { path: 'movies', loadChildren: () => import('./pages/movies/movies.module').then(m => m.MoviesModule)},
  { path: 'votes/:id', loadChildren: () => import('./pages/votes/votes.module').then(m => m.VotesModule)},
  { path: '', redirectTo: 'movies', pathMatch: 'full'},
  { path: '*', redirectTo: 'movies', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
