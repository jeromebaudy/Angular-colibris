import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  serie: object;
  listSeries: Array<object>;

  constructor(private http: HttpClient) {

    this.get_series();
  }
  /* recuperation séries */
  get_series() {

    this.http.get<Array<object>>('http://localhost:3000/recherche').subscribe(
      data => {
        console.log(data);
        this.listSeries = data
      }
    )
  }

}
