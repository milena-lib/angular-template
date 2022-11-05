import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { HelperService } from 'src/app/core/helper.service';
import { Cast } from 'src/app/shared/models/cast.model';
import { Episode } from 'src/app/shared/models/episodes.model';
import { Movie } from 'src/app/shared/models/movie.model';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss']
})
export class VotesComponent implements OnInit {
  movieId!: string;
  movieName!: string;
  movie?: Movie;

  cast: Cast[] = [];
  episodes: Episode[] = [];

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private apiService: ApiService,
    private helper: HelperService) { }

  ngOnInit(): void {
    if(!this.helper.movies.length){
      this.router.navigate(['/movies']);
      return;
    }

    this.movieId = this.route.snapshot.paramMap.get('id') || "";
    // this.movieName = this.route.snapshot.paramMap.get('name') || "";

    this.getMovie();
    this.getCast();
    this.getEpisodesByMovie();
  }

  getMovie() {
    this.movie = this.helper.movies.find(item => item.show.id === +this.movieId);
    this.movieName = this.movie?.show.name || "";
  }

  getCast() {
    if(this.movieId) {
      this.apiService.getCast(this.movieId).subscribe(items => {
        this.cast = items;
        console.log("cast: ", this.cast);
      });
    }
  }

  getEpisodesByMovie() {
    if(this.movieId) {
      this.apiService.getEpisodes(this.movieId).subscribe(items => {
        this.episodes = items;
        console.log("episodes: ", this.episodes);
      });
    }
  }

}
