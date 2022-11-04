import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasePageComponent } from './base-page/base-page.component';
// import { MatInputModule } from '@angular/material/input';
// import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    BasePageComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    // MatInputModule,
    // MatIconModule,
    FormsModule,    
    ReactiveFormsModule,
    MaterialModule    
  ],
  exports: [
    ProductsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
