import { TestBed } from '@angular/core/testing';

import { FileAnalyzeService } from './file-analyze.service';

describe('FileAnalyzeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileAnalyzeService = TestBed.get(FileAnalyzeService);
    expect(service).toBeTruthy();
  });
});
