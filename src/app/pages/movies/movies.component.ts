import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { Movie } from 'src/app/shared/models/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  saveSearchParam($event: string) {
    const param = $event;
    this.loadMovies(param);
  }

  loadMovies(param: string) {
    this.apiService.getMovies(param).subscribe(items => {
      this.movies = items;
      
      // console.log("movie: ", this.movies);
    });
  }

  goMovie(movieId:number) {
    this.router.navigate(['/votes', movieId]);
  }

// deleteProduct(id: number) {
  //   this.apiService.deleteProduct(id).subscribe({ next: () => this.loadProducts(), error: e => alert(e) });
  // }
}
