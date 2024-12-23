import { Component, Input, OnInit } from '@angular/core';
import { CardsService } from 'src/app/core/services/cards.service'

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent {

  constructor(public CardsService: CardsService) { 
    const cardsUI = this.CardsService.cards
    console.log(cardsUI)
  }
}
