import { Injectable } from '@angular/core';
import { ICard, ICards } from 'src/app/shared/types/i-category-card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  
  public allCards: ICards[] = [];
  public cards: ICard[] | null = null;

  constructor() { }

}
