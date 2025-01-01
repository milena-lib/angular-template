import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { HelperService } from 'src/app/core/helper.service';
import { Cast } from 'src/app/shared/models/cast.model';
import { Episode } from 'src/app/shared/models/episodes.model';
import { ShowData } from 'src/app/shared/models/show.model';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss']
})
export class VotesComponent implements OnInit {
  showId!: string;
  showName!: string;
  show?: ShowData;

  casts: Cast[] = [];
  episodes: Episode[] = [];

  isVoted: boolean = false;

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private apiService: ApiService,
    private helper: HelperService) { }

  ngOnInit(): void {
    if(!this.helper.shows.length){
      this.router.navigate(['/shows']);
      return;
    }

    this.showId = this.route.snapshot.paramMap.get('id') || "";
    // this.showName = this.route.snapshot.paramMap.get('name') || "";

    this.getShow();
    this.getCast();
    this.getEpisodesByShow();
  }

  getShow() {
    this.show = this.helper.shows.find(item => item.show.id === +this.showId);
    this.showName = this.show?.show.name || "";
  }

  getCast() {
    if(this.showId) {
      this.apiService.getCast(this.showId).subscribe(items => {
        this.casts = items;
        console.log("casts: ", this.casts);
      });
    }
  }

  getEpisodesByShow() {
    if(this.showId) {
      this.apiService.getEpisodes(this.showId).subscribe(items => {
        this.episodes = items;
        console.log("episodes: ", this.episodes);
      });
    }
  }

  saveVote(show: ShowData) {
    if(this.isVoted) {
      return;
    }
    
    console.log("show vote: ", show);

    this.isVoted = true;
  }

}
