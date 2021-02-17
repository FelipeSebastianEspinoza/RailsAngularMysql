import { Component, OnInit } from '@angular/core';
import { ExtinguisherService } from '../../../services/extinguisher.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-extinguishers-registration',
  templateUrl: './extinguishers-registration.component.html',
  styleUrls: ['./extinguishers-registration.component.css'],
  providers: [ExtinguisherService],
})
export class ExtinguishersRegistrationComponent implements OnInit {
  id = 0;
  header: string;
  extinguisher = {
    id: 0,
    name: '',
    status: '',
    charge: '',
    expiration: '',
    active: '',
    created_at: '',
    updated_at: '',
  };
  constructor(
    public extinguisherService: ExtinguisherService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.header = this.id === 0 ? 'Registration' : 'Edit';

    if (this.id != 0) {
      this.extinguisherService.getOneExtinguishers(this.id).subscribe((res) => {
        this.setExtinguishers(res);
      });
    }
  }

  setExtinguishers(res) {
    this.extinguisher = {
      id: res.id,
      name: res.name,
      status: res.status,
      charge: res.charge,
      expiration: res.expiration,
      active: res.active,
      created_at: res.created_at,
      updated_at: res.updated_at,
    };
  }

  register(form: NgForm) {
    let extinguisher = {
      id: form.value.id,
      name: form.value.name,
      status: form.value.status,
      charge: form.value.charge,
      expiration: form.value.expiration,
    };
    if (this.extinguisher.id == 0) {
      this.extinguisherService.registerExtinguisher(extinguisher);
    } else {
      this.extinguisherService.updateExtinguisher(extinguisher);
    }
    this.router.navigateByUrl('/extinguishers');
  }
}
