import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowsRoutingModule } from './shows-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShowsComponent } from './shows.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ShowsComponent],
  imports: [
    CommonModule,
    ShowsRoutingModule,
    SharedModule,
    MatCardModule
  ]
})
export class ShowsModule { }
