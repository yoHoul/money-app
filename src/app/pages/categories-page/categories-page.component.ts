import { Component, Input, OnDestroy, SimpleChanges } from '@angular/core';
import { IUser, ICard, ICardStory, ICategories } from 'src/app/shared/types/i-category-card';
import { foregroundColor,backgroundColor } from '../../../assets/styles/categoriesStyles'

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})

export class CategoriesPageComponent implements OnDestroy {
  
  @Input() Cards: ICard[] = [];

  walletType: string = '₽';
  CategoriesUI: ICategories[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['Cards']) {
      this.initWidget(this.Cards);
    }
  }

  initWidget(data: ICard[]) {
    this.CategoriesUI = data.map(card => ({
      ...card,
      networth: this.getCardNetworth(card.CardStory)
    }))
    console.log(this.CategoriesUI);
  }

  getCardNetworth(CardStory: ICardStory[] | null) {
    let networth = 0;
    if(CardStory == null) {
      return networth;
    }
    for(let record of CardStory) {
      networth += record.value;
    }
    return networth
  }

  getCardImg(CardLogo: string) {
  }

  getColor(color: string, place: string) {
    if(place == 'foreground'){
      switch(color){
        case 'Pink':
          return foregroundColor.Pink
        case 'Blue':
          return foregroundColor.Blue
        case 'Green':
          return foregroundColor.Green
        case 'Red':
          return foregroundColor.Red
        case 'Black':
          return foregroundColor.Black
      }
    }
    if(place == 'background'){
      switch(color){
        case 'Pink':
          return backgroundColor.Pink
        case 'Blue':
          return backgroundColor.Blue
        case 'Green':
          return backgroundColor.Green
        case 'Red':
          return backgroundColor.Red
        case 'Black':
          return backgroundColor.Black
      }
    }
    return foregroundColor.Black
  }

  ngOnDestroy(): void {}
}
