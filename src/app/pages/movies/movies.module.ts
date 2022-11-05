import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MoviesComponent } from './movies.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule,
    MatCardModule
  ]
})
export class MoviesModule { }
