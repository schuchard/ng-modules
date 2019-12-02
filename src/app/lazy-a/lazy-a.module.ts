import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyARoutingModule } from './lazy-a-routing.module';
import { LazyAComponent } from './lazy-a.component';

@NgModule({
  declarations: [LazyAComponent],
  imports: [CommonModule, LazyARoutingModule],
})
export class LazyAModule {}
