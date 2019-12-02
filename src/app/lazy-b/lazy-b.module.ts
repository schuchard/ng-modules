import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyBRoutingModule } from './lazy-b-routing.module';
import { LazyBComponent } from './lazy-b.component';
import { CounterService } from '../core/counter.service';

@NgModule({
  declarations: [LazyBComponent],
  imports: [CommonModule, LazyBRoutingModule],
  providers: [CounterService],
})
export class LazyBModule {}
