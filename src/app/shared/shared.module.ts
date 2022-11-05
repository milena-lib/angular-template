import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasePageComponent } from './base-page/base-page.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { MaterialModule } from './material.module';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    BasePageComponent,
    ProductsComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,    
    ReactiveFormsModule,
    MaterialModule    
  ],
  exports: [
    ProductsComponent,
    SearchComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
