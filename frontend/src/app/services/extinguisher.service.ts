import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Extinguisher } from "./extinguisher";

@Injectable({
  providedIn: 'root',
})
export class ExtinguisherService {
  selectedExtinguisher: Extinguisher;
  extinguishers: Extinguisher[];
  constructor(private http: HttpClient) {
   // this.selectedExtinguisher = new Extinguisher();
  }
  getExtinguishers(){
 
    return this.http.get(`http://localhost:3000/extinguishers`)
    
  }
}
