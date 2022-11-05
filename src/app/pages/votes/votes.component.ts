import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss']
})
export class VotesComponent implements OnInit {
  movieId!: string;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id') || "";

    this.getCast();
  }

  getCast() {
    if(this.movieId) {
      this.apiService.getCast(this.movieId).subscribe(items => {
        
        console.log("cast: ", items);
      });
    }
  }

}
