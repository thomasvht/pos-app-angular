import { TestBed } from '@angular/core/testing';

import { FirebaseService } from './firebase.service';

describe('FirebaseService', () => {
  let service: FirebaseService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseService);
  });

  it('Should create the service', () => {
    expect(service).toBeTruthy();
  });
});
