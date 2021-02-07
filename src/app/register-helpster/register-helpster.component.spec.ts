import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterHelpsterComponent } from './register-helpster.component';

describe('RegisterHelpsterComponent', () => {
  let component: RegisterHelpsterComponent;
  let fixture: ComponentFixture<RegisterHelpsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterHelpsterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterHelpsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
