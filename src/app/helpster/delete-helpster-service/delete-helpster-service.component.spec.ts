import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHelpsterServiceComponent } from './delete-helpster-service.component';

describe('DeleteHelpsterServiceComponent', () => {
  let component: DeleteHelpsterServiceComponent;
  let fixture: ComponentFixture<DeleteHelpsterServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteHelpsterServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteHelpsterServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
