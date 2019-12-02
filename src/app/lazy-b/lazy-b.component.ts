import { Component } from '@angular/core';
import { CounterService } from '../core/counter.service';

@Component({
  selector: 'app-lazy-b',
  templateUrl: './lazy-b.component.html',
  styleUrls: ['./lazy-b.component.scss'],
})
export class LazyBComponent {
  constructor(public counterService: CounterService) {}
}
