import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpsterComponent } from './helpster.component';

describe('HelpsterComponent', () => {
  let component: HelpsterComponent;
  let fixture: ComponentFixture<HelpsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpsterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
