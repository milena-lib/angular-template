import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  movies: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadProducts();
  }
  
  loadProducts() {
    this.apiService.getMovies('girls').subscribe(items => {
      this.movies = items;

      console.log("movies: ", this.movies);
    });
  }

  // deleteProduct(id: number) {
  //   this.apiService.deleteProduct(id).subscribe({ next: () => this.loadProducts(), error: e => alert(e) });
  // }

}
