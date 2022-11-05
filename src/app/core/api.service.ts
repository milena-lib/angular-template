import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly url = environment.serverApi;
  
  constructor(private httpClient: HttpClient) {

  }

  getMovies(paramSearch: string): Observable<any[]> {
      const moviesUrl = `${this.url}/api/Movies/${paramSearch}`;
      return this.httpClient.get<any[]>(moviesUrl);
  }

  getCast(movieId: string): Observable<any[]> {
    const castUrl = `${this.url}/api/Cast/${movieId}/cast`;
    return this.httpClient.get<any[]>(castUrl);
  }

  getEpisodes(movieId: string): Observable<any[]> {
    const castUrl = `${this.url}/api/Cast/${movieId}/episodes`;
    return this.httpClient.get<any[]>(castUrl);
  }

  // deleteProduct(id: number): Observable<Product> {
  //     return this.httpClient.delete<Product>(`${this.url}/Products/${id}`);
  // }
}
