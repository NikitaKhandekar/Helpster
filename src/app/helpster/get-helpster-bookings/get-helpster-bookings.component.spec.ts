import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHelpsterBookingsComponent } from './get-helpster-bookings.component';

describe('GetHelpsterBookingsComponent', () => {
  let component: GetHelpsterBookingsComponent;
  let fixture: ComponentFixture<GetHelpsterBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetHelpsterBookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetHelpsterBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
