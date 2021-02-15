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

  emptySearch = false;
  page: number = 1;
  per_page: number = 5;
  search: string = '';
  totalExtinguishers: number= 0;

  ngOnInit(): void {
    this.filterSearch();
  }

  setExtinguiserResponse(res) {
    if (Array.isArray(res) && res.length) {
      this.extinguisherService.extinguishers = res as Extinguisher[];
      this.emptySearch = false;
    } else {
      this.totalExtinguishers = 0;
      this.extinguisherService.extinguishers = [{}] as Extinguisher[];
      this.emptySearch = true;
    }
  }

  filterSearch() {
    this.search = this.search.replace(/\s/g, '');
    if (this.search != '') {
      this.extinguisherService
        .getExtinguishersSearch(this.page, this.per_page, this.search)
        .subscribe((res) => {
          this.setExtinguiserResponse(res);
        });
    } else {
      this.extinguisherService.getExtinguishersSearch(
        this.page,
        this.per_page,
        this.search
      );
      this.extinguisherService
        .getExtinguishersSearch(this.page, this.per_page, this.search)
        .subscribe((res) => {
          this.setExtinguiserResponse(res[0]);
   
          this.totalExtinguishers = res[1];

        });
    }
  }
}
