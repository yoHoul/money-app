import { Component, OnDestroy } from '@angular/core';
import { ReplaySubject, Subscription, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service'
import { IUser, ICard } from 'src/app/shared/types/i-category-card';


@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})

export class CategoriesPageComponent implements OnDestroy {
  
  CategoriesUI: IUser[] = [];
  Cards: ICard[] = [];

  walletType: string = '₽';


  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  private subscription: Subscription;

  constructor(public ApiService: ApiService) { 
    this.subscription = this.ApiService.getAllCards().pipe(takeUntil(this.destroyed$)).subscribe(
      (res) => {this.CategoriesUI = res;
      this.initData(this.CategoriesUI, 1)
      }
    )
  }


  initData(config: IUser[], id: number) {
    this.Cards = config
    .filter((item) => item.id == id)
    .flatMap((item) => item.cards as ICard[]);
    console.log('Cards:', this.Cards);
  }

  getCardImg(CardLogo: string, CardColor: string) {
    
  }

  getCardNetworth(CardWorth: any) {

  }

  getColor(color: string) {
    
  }


  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
