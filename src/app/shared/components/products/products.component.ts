import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    
  }
}
