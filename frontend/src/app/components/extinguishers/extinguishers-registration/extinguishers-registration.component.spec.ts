import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtinguishersRegistrationComponent } from './extinguishers-registration.component';

describe('ExtinguishersRegistrationComponent', () => {
  let component: ExtinguishersRegistrationComponent;
  let fixture: ComponentFixture<ExtinguishersRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtinguishersRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtinguishersRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
