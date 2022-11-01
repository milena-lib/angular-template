import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasePageComponent } from './base-page/base-page.component';
import { ClickOutsideDirective } from '../directives/click-outside.directive';
import { NumbersOnlyDirective } from '../directives/numbers-only.directive';

@NgModule({
  declarations: [
    BasePageComponent,
    NumbersOnlyDirective,
    ClickOutsideDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
