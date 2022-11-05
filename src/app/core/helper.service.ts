import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../shared/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  movies: Movie[]=[];
}
