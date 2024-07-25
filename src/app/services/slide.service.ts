import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Picsum } from '../models/picsum';

@Injectable({
  providedIn: 'root'
})
export class SlideService {
  private readonly http = inject(HttpClient);
  private readonly picSumSubject = new ReplaySubject<Picsum[]>(1);

  constructor() { }

  public picsum$ = this.picSumSubject.asObservable();


  getPicsum() {
    this.http.get<Picsum[]>('https://picsum.photos/v2/list?limit=10').subscribe({
      next: (picsum: Picsum[]) => this.picSumSubject.next(picsum),
      error: (error) => console.error(error)
    });
  }
}
