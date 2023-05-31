import { TestBed } from '@angular/core/testing';

import { NewActionService } from './new-action.service';

describe('NewActionService', () => {
  let service: NewActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
