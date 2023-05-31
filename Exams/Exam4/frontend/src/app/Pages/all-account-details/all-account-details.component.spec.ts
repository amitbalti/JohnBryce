import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAccountDetailsComponent } from './all-account-details.component';

describe('AllAccountDetailsComponent', () => {
  let component: AllAccountDetailsComponent;
  let fixture: ComponentFixture<AllAccountDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllAccountDetailsComponent]
    });
    fixture = TestBed.createComponent(AllAccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
