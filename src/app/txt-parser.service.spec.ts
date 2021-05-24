import { TestBed } from '@angular/core/testing';

import { TxtParserService } from './txt-parser.service';

describe('TxtParserService', () => {
  let service: TxtParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TxtParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
