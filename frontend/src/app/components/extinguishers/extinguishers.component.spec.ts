import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtinguishersComponent } from './extinguishers.component';

describe('ExtinguishersComponent', () => {
  let component: ExtinguishersComponent;
  let fixture: ComponentFixture<ExtinguishersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtinguishersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtinguishersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
