import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHelpsterComponent } from './add-helpster.component';

describe('AddHelpsterComponent', () => {
  let component: AddHelpsterComponent;
  let fixture: ComponentFixture<AddHelpsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHelpsterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHelpsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
