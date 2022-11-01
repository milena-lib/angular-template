import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumbersOnlyDirective } from './directives/numbers-only.directive';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { SharedModule } from './shared/shared.module';
// import {MatInputModule} from '@angular/material/input';
// import { MatIconModule } from '@angular/material/icon';
// import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NumbersOnlyDirective,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    // MatInputModule,
    // MatIconModule,
    // FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
