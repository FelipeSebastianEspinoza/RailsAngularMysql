import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Extinguisher } from './extinguisher';

@Injectable({
  providedIn: 'root',
})
export class ExtinguisherService {
  private URL = 'http://localhost:3000/extinguishers';
  selectedExtinguisher: Extinguisher;
  extinguishers: Extinguisher[];
  constructor(private http: HttpClient) {
    // this.selectedExtinguisher = new Extinguisher();
  }

  getExtinguishers(page, per_page) {
    return this.http.get(this.URL + '?per_page=' + per_page + '&page=' + page);
  }

  getExtinguishersSearch(page, per_page, search) {
    return this.http.get(
      this.URL + '/?name=' + search 
    );
  }
}
