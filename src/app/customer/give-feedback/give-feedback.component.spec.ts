import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveFeedbackComponent } from './give-feedback.component';

describe('GiveFeedbackComponent', () => {
  let component: GiveFeedbackComponent;
  let fixture: ComponentFixture<GiveFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
