import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { HelperService } from 'src/app/core/helper.service';
import { ShowData } from 'src/app/shared/models/show.model';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {
  shows: ShowData[] = [];

  constructor(private apiService: ApiService, 
    private router: Router,
    private helper: HelperService) { }

  ngOnInit(): void {
  }

  saveSearchParam($event: string) {
    const param = $event;
    this.loadShows(param);
  }

  loadShows(param: string) {
    this.apiService.getShows(param).subscribe(items => {
      this.shows = items;
      this.helper.shows = this.shows;
      // console.log("show: ", this.shows);
    });
  }

  goShow(showId: number, showName: string) {
    this.router.navigate(['/votes', showId, showName]);
  }

// deleteProduct(id: number) {
  //   this.apiService.deleteProduct(id).subscribe({ next: () => this.loadProducts(), error: e => alert(e) });
  // }
}
