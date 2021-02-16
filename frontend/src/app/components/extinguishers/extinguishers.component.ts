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
  p: number = 1;
  items_page: number = 5;
  ngOnInit(): void {
    this.getExtinguishers();
  }
  
  getExtinguishers() {
    this.extinguisherService.getExtinguishers().subscribe((res) => {
      this.extinguisherService.extinguishers = res as Extinguisher[];
    });
  }
}
