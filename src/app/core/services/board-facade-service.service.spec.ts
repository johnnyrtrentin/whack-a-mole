import { TestBed } from '@angular/core/testing';

import { BoardFacadeServiceService } from './board-facade-service.service';

describe('BoardFacadeServiceService', () => {
  let service: BoardFacadeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardFacadeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
