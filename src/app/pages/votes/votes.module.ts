import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VotesRoutingModule } from './votes-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { VotesComponent } from './votes.component';


@NgModule({
  declarations: [VotesComponent],
  imports: [
    CommonModule,
    VotesRoutingModule,
    SharedModule
  ]
})
export class VotesModule { }
