import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Extinguisher } from './extinguisher';

@Injectable({
  providedIn: 'root',
})
export class ExtinguisherService {
  private URL = 'http://localhost:3000/extinguishers';

  extinguishers: Extinguisher[];
  constructor(private http: HttpClient) {}

  getExtinguishersSearch(page, per_page, search) {
    if (search != '') {
      return this.http.get(
        this.URL + '?per_page=' + per_page + '&page=' + page + '&name=' + search
      );
    } else {
      return this.http.get(
        this.URL + '?per_page=' + per_page + '&page=' + page
      );
    }
  }
  getOneExtinguishers(id) {
    return this.http.get(this.URL + '/' + id);
  }
  registerExtinguisher(form) {
    let extinguisher = {};
    extinguisher = {
      extinguisher: {
        name: form.name,
        active: true,
      },
    };
    this.http.post<any>(this.URL, extinguisher).subscribe((data) => {
      //console.log(data);
    });
  }
  updateExtinguisher(form) {
    let extinguisher = {};
    extinguisher = {
      extinguisher: {
        id: form.id,
        name: form.name,
        active: true,
      },
    };
    this.http
      .patch<any>(this.URL + '/' + form.id, extinguisher)
      .subscribe((data) => {});
  }

  deleteExtinguisher(form) {
    this.http.delete(this.URL + '/' + form).subscribe((data) => {
      //console.log(data);
    });
  }
}
