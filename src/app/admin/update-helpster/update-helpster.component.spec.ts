import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHelpsterComponent } from './update-helpster.component';

describe('UpdateHelpsterComponent', () => {
  let component: UpdateHelpsterComponent;
  let fixture: ComponentFixture<UpdateHelpsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateHelpsterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHelpsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
