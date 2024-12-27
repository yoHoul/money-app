import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICard, IUser } from 'src/app/shared/types/i-category-card';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  public getAllCards(): Observable<IUser[]>{
    return this.http.get<IUser[]>("../../../assets/mocks/cards.json")
  }

  public getCardsUI(id: number): Observable<IUser | undefined>{
    return this.http.get<IUser[]>("../../../assets/mocks/cards.json").pipe(
      map(items => {
        return items.find(item => item.id === id);
      }))
  }
    
}
