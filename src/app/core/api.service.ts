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

  getShows(paramSearch: string): Observable<any[]> {
      const showUrl = `${this.url}/api/Shows/${paramSearch}`;
      return this.httpClient.get<any[]>(showUrl);
  }

  getCast(showId: string): Observable<any[]> {
    const castUrl = `${this.url}/api/Cast/${showId}/cast`;
    return this.httpClient.get<any[]>(castUrl);
  }

  getEpisodes(showId: string): Observable<any[]> {
    const castUrl = `${this.url}/api/Cast/${showId}/episodes`;
    return this.httpClient.get<any[]>(castUrl);
  }

  // deleteProduct(id: number): Observable<Product> {
  //     return this.httpClient.delete<Product>(`${this.url}/Products/${id}`);
  // }
}
