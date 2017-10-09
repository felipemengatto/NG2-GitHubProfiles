/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GitUserService } from './git-user.service';

describe('GitUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitUserService]
    });
  });

  it('should ...', inject([GitUserService], (service: GitUserService) => {
    expect(service).toBeTruthy();
  }));
});
