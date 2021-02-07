import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAvailableServicesComponent } from './show-available-services.component';

describe('ShowAvailableServicesComponent', () => {
  let component: ShowAvailableServicesComponent;
  let fixture: ComponentFixture<ShowAvailableServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAvailableServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAvailableServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
