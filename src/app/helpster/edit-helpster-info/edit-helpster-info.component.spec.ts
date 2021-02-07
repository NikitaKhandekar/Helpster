import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHelpsterInfoComponent } from './edit-helpster-info.component';

describe('EditHelpsterInfoComponent', () => {
  let component: EditHelpsterInfoComponent;
  let fixture: ComponentFixture<EditHelpsterInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHelpsterInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHelpsterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
