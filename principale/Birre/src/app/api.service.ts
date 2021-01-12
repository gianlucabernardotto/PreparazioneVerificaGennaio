import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) {

  }
      searchBirre(query: string) {
    const url = `https://api.punkapi.com/v2/beers?beer_name=${query}`;
    let obsBirre = this.http.get(url);
    console.log(obsBirre);
    return obsBirre;
  }

  getBirre(id: string) {
    const url = `https://api.punkapi.com/v2/beers/${id}`;
    let obsBirre = this.http.get(url);
    console.log(obsBirre);
    return obsBirre;
  }
}
