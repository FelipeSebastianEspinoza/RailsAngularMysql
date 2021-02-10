import { Component, OnInit } from '@angular/core';
import { ExtinguisherService } from '../../services/extinguisher.service';
import { Extinguisher } from '../../services/extinguisher';

@Component({
  selector: 'app-extinguishers',
  templateUrl: './extinguishers.component.html',
  styleUrls: ['./extinguishers.component.css'],
  providers: [ExtinguisherService],
})
export class ExtinguishersComponent implements OnInit {
  constructor(public extinguisherService: ExtinguisherService) {}

  page: number = 1;
  per_page: number = 5;
  search: string = '';

  ngOnInit(): void {
    this.getExtinguishers();
  }

  getExtinguishers() {
    this.extinguisherService
      .getExtinguishers(this.page, this.per_page)
      .subscribe((res) => {
        this.extinguisherService.extinguishers = res as Extinguisher[];
      });
  }
  filterSearch() {
    this.search = this.search.replace(/\s/g, '');
    if (this.search != '') {
      console.log(this.search);
      this.extinguisherService
        .getExtinguishersSearch(this.page, this.per_page, this.search)
        .subscribe((res) => {
          this.extinguisherService.extinguishers = res as Extinguisher[];
        });
    } else {
      this.getExtinguishers();
    }
  }
}
