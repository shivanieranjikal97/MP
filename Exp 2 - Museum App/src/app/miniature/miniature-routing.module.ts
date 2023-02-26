import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiniaturePage } from './miniature.page';

const routes: Routes = [
  {
    path: '',
    component: MiniaturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiniaturePageRoutingModule {}
