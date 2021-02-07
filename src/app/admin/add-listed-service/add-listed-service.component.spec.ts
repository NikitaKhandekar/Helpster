import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListedServiceComponent } from './add-listed-service.component';

describe('AddListedServiceComponent', () => {
  let component: AddListedServiceComponent;
  let fixture: ComponentFixture<AddListedServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddListedServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddListedServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
