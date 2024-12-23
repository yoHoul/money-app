import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { card, ICards } from 'src/app/shared/types/i-category-card';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(private http:HttpClient) { }

  public getAllCards(): Observable<ICards[]>{
    return this.http.get<ICards[]>("../../../assers/mocks/cards.json")
  }

  public getCards(id: number): Observable<ICards | undefined> {
    return this.http.get<ICards[]>("../../../assers/mocks/cards.json").pipe(
      map(items => {
        return items.find(item => item.id === id)
      }
      )
    )
  }

}
