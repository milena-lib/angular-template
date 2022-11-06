import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VotesRoutingModule } from './votes-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { VotesComponent } from './votes.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [VotesComponent],
  imports: [
    CommonModule,
    VotesRoutingModule,
    SharedModule,
    MatCardModule,
    MatIconModule
  ]
})
export class VotesModule { }
