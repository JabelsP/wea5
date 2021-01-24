import { TestBed } from '@angular/core/testing';

import { FilmOverviewService } from './film-overview.service';

describe('FilmOverviewService', () => {
  let service: FilmOverviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmOverviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
