import { Injectable } from '@angular/core';
import { BehaviorSubject, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  readonly count$ = new BehaviorSubject(0);

  constructor() {
    timer(0, 1000)
      .pipe(map(() => this.add(1)))
      .subscribe();
  }

  add(value: number) {
    this.count$.next(this.count$.value + value);
  }
}
