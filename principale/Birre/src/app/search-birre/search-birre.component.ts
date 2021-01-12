import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-birre',
  templateUrl: './search-birre.component.html',
  styleUrls: ['./search-birre.component.css']
})
export class SearchBirreComponent {
  query: string;
  title = 'first-routed-app';
  obsBirre: Observable<Object>;
  results: any;

  constructor(public api: APIService){

  }
  getBirre(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsBirre = this.api.searchBirre(this.query);
    this.obsBirre.subscribe((data) => { this.results = data; console.log(this.results) });
  }

  BirreResults(res: any): void {
    this.results = null;
    if (res && res.results) {
      this.results = res.results;
    }
  }
}
