import { Component, Input, OnDestroy, SimpleChanges } from '@angular/core';
import { IUser, ICard, ICardStory, ICategories } from 'src/app/shared/types/i-category-card';
import { foregroundColor,backgroundColor,CardLogo } from '../../../assets/styles/categoriesStyles'

@Component({
    selector: 'app-categories-page',
    templateUrl: './categories-page.component.html',
    styleUrls: ['./categories-page.component.scss'],
    standalone: false
})

export class CategoriesPageComponent implements OnDestroy {
  
  @Input() Cards: ICard[] = [];

  walletType: string = '₽';
  CategoriesUI: ICategories[] = [];
  totalSpend: number = 123; //пока не считает, рвани жопа
  category: boolean = true;
  state: boolean = true;

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
  }

  getCardNetworth(CardStory: ICardStory[] | null) {
    let networth = 0;
    if(CardStory == null) {
      return networth;
    }
    networth = CardStory.reduce((sum, record) => sum + record.value, 0)
    return Number(networth.toFixed(2))
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

  changeCategory() {
    this.category = !this.category;
    this.state = !this.state;
    console.log(this.state)
  }

  ngOnDestroy(): void {}
}
