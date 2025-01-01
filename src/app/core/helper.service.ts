import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ShowData } from '../shared/models/show.model';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  shows: ShowData[]=[];
}
