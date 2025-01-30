import { Component, Input, OnDestroy, SimpleChanges } from '@angular/core';
import { IUser, ICard, ICardStory, ICategories } from 'src/app/shared/types/i-category-card';
import { foregroundColor,backgroundColor,CardLogo } from '../../../assets/styles/categoriesStyles'

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})

export class CategoriesPageComponent implements OnDestroy {
  
  @Input() Cards: ICard[] = [];

  walletType: string = '₽';
  CategoriesUI: ICategories[] = [];
  totalEarn: number = 0;
  totalSpend: number = 123;

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
    for(let record of this.CategoriesUI) {
      this.totalEarn += record.networth; //что-то придумать с этой хуетой
    }
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

  getCardImg(image: string) {
    const imageMap = {
      ForkAndKnife: CardLogo.ForkAndKnife,
      Ticket: CardLogo.Ticket
    }
    return imageMap[image as keyof typeof CardLogo]
  }

  getColor(color: string, place: 'foreground' | 'background') {
    const colorMap = {
      foreground: foregroundColor,
      background: backgroundColor
    };
    return colorMap[place][color as keyof typeof foregroundColor] ?? foregroundColor.Black;
  }

  ngOnDestroy(): void {}
}
