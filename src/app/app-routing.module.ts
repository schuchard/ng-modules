import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'lazy-a',
    loadChildren: () => import('./lazy-a/lazy-a.module').then(m => m.LazyAModule),
  },
  { path: 'lazy-b', loadChildren: () => import('./lazy-b/lazy-b.module').then(m => m.LazyBModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
