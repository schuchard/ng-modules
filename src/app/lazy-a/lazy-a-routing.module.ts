import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyAComponent } from './lazy-a.component';

const routes: Routes = [{ path: '', component: LazyAComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyARoutingModule {}
