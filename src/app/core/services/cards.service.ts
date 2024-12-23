import { Injectable } from '@angular/core';
import { card, ICards } from 'src/app/shared/types/i-category-card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  
  public allCards: ICards[] = [];
  public cards: card[] | null = null;

  constructor() { }

}
