/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CategoryCardsService } from './category-cards.service';

describe('Service: CategoryCards', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryCardsService]
    });
  });

  it('should ...', inject([CategoryCardsService], (service: CategoryCardsService) => {
    expect(service).toBeTruthy();
  }));
});
