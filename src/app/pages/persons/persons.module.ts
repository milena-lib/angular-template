import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonsRoutingModule } from './persons-routing.module';
import { PersonsComponent } from './persons.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NumbersOnlyDirective } from 'src/app/directives/numbers-only.directive';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PersonsComponent,
    NumbersOnlyDirective
  ],
  imports: [
    CommonModule,
    PersonsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PersonsModule { }
