import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyBComponent } from './lazy-b.component';

const routes: Routes = [{ path: '', component: LazyBComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyBRoutingModule {}
