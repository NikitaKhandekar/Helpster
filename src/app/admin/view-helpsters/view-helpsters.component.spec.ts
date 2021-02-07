import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHelpstersComponent } from './view-helpsters.component';

describe('ViewHelpstersComponent', () => {
  let component: ViewHelpstersComponent;
  let fixture: ComponentFixture<ViewHelpstersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHelpstersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHelpstersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
