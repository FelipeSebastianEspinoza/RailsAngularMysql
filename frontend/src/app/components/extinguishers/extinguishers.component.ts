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

  empty_search = false;
  page: number = 1;
  per_page: number = 5;
  search: string = '';
  total_extinguishers: number = 0;
  pagination_amount: number = 0;
  total_pages = 1;
  per_page_class: number = 5;
  pagination_array = [];

  ngOnInit(): void {
    this.filterSearch();
  }

  setExtinguiserResponse(res) {
    if (Array.isArray(res) && res.length) {
      this.extinguisherService.extinguishers = res as Extinguisher[];
      this.empty_search = false;
    } else {
      this.total_extinguishers = 0;
      this.extinguisherService.extinguishers = [{}] as Extinguisher[];
      this.empty_search = true;
    }
  }

  filterSearch() {
    this.search = this.search.replace(/\s/g, '');
    if (this.search != '') {
      this.extinguisherService
        .getExtinguishersSearch(this.page, this.per_page, this.search)
        .subscribe((res) => {
          this.setExtinguiserResponse(res[0]);
          this.total_extinguishers = res[1];
          this.setTotalPages();
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
          this.total_extinguishers = res[1];
          this.setTotalPages();
        });
    }
  }

  setTotalPages() {
    this.pagination_amount = this.total_extinguishers / this.per_page;
    let diff = Math.round(this.total_extinguishers / this.per_page);
    if (this.pagination_amount != diff) {
      if (this.pagination_amount < 1) {
        this.total_pages = diff;
      } else if (this.pagination_amount < diff) {
        this.total_pages = diff;
      } else {
        this.total_pages = diff + 1;
      }
    } else {
      this.total_pages = diff;
    }
    this.pagination_array = new Array(this.total_pages);
  }

  setPage(val) {
    if (this.page + val <= 0) {
      this.page = 1;
    } else if (this.page + val > this.total_pages) {
    } else {
      this.page = this.page + val;
      this.filterSearch();
    }
  }

  pageNumber(val) {
    this.page = val;
    this.filterSearch();
  }

  setPerPage(val) {
    this.per_page_class = val;
    this.page = 1;
    this.per_page = val;
    this.filterSearch();
  }

  newSearch() {
    this.page = 1;
  }
}
