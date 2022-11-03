import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
  
  loadProducts() {
    this.apiService.getAllProducts().subscribe(items => {
      this.products = items;
    });
  }

  deleteProduct(id: number) {
    this.apiService.deleteProduct(id).subscribe({ next: () => this.loadProducts(), error: e => alert(e) });
  }

}
