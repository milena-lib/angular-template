import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'persons', loadChildren: () => import('./pages/persons/persons.module').then(m => m.PersonsModule)},
  { path: 'shows', loadChildren: () => import('./pages/shows/shows.module').then(m => m.ShowsModule)},
  { path: 'votes/:id/:name', loadChildren: () => import('./pages/votes/votes.module').then(m => m.VotesModule)},
  { path: '', redirectTo: 'shows', pathMatch: 'full'},
  { path: '*', redirectTo: 'shows', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
