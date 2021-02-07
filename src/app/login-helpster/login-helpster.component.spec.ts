import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginHelpsterComponent } from './login-helpster.component';

describe('LoginHelpsterComponent', () => {
  let component: LoginHelpsterComponent;
  let fixture: ComponentFixture<LoginHelpsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginHelpsterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginHelpsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
