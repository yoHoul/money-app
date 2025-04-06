import { Component, Output } from '@angular/core';
import { ICard, IUser } from './shared/types/i-category-card';
import { ApiService } from 'src/app/core/services/api.service'
import { ReplaySubject, Subscription, takeUntil } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  
  CategoriesUI: IUser[] = [];
  Cards: ICard[] = [];

  walletType: string = '₽';
  balance: number = 0;


  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  private subscription: Subscription;

  constructor(public ApiService: ApiService) { 
    this.subscription = this.ApiService.getAllCards().pipe(takeUntil(this.destroyed$)).subscribe(
      (res) => {
      this.CategoriesUI = res;
      this.initData(this.CategoriesUI, 0)
      }
    )
  }

  initData(config: IUser[], id: number) {
    this.Cards = config
    .filter((item) => item.id == id)
    .flatMap((item) => item.cards as ICard[]);
    this.balance = config[id].balance;
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
