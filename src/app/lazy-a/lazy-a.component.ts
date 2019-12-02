import { Component, OnInit } from '@angular/core';
import { CounterService } from '../core/counter.service';

@Component({
  selector: 'app-lazy-a',
  templateUrl: './lazy-a.component.html',
  styleUrls: ['./lazy-a.component.scss'],
})
export class LazyAComponent implements OnInit {
  constructor(public counterService: CounterService) {}

  ngOnInit() {}
}
