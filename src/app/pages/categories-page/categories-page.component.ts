import { Component, OnDestroy } from '@angular/core';
import { ReplaySubject, Subscription, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service'
import { ICards, ICard } from 'src/app/shared/types/i-category-card';


@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnDestroy {
  
  CategoriesUI: ICards[] = [];


  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  private subscription: Subscription;

  constructor(public ApiService: ApiService) { 
    this.subscription = this.ApiService.getAllCards().pipe(takeUntil(this.destroyed$)).subscribe(
      (res) => {this.CategoriesUI = res;
      this.initData(this.CategoriesUI)
      }
    )

  }


  initData(config: ICards[]) {
    const allCards = config
    .filter((item) => item.cards !== null) // Фильтруем элементы с null в cards
    .flatMap((item) => item.cards as ICard[]); // Извлекаем и объединяем массивы cards

  if (allCards.length === 0) {
    console.error('Нет доступных карточек');
    return;
  }

  console.log('Все cards:', allCards);


    
  }


  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
