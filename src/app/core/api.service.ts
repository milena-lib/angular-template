import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly url = environment.serverApi;
  
  constructor(private httpClient: HttpClient) {

  }

  getAllProducts(): Observable<Product[]> {
      return this.httpClient.get<Product[]>(`${this.url}/Products`);
  }

  deleteProduct(id: number): Observable<Product> {
      return this.httpClient.delete<Product>(`${this.url}/Products/${id}`);
  }
}
