import { Component } from '@angular/core';
import { CounterService } from './core/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ng-modules';

  constructor(public counterService: CounterService) {}
}
