import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SUCCESSComponent } from './success.component';

describe('SUCCESSComponent', () => {
  let component: SUCCESSComponent;
  let fixture: ComponentFixture<SUCCESSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SUCCESSComponent]
    });
    fixture = TestBed.createComponent(SUCCESSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
