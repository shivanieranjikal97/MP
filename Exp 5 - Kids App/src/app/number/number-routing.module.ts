import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NumberPage } from './number.page';

const routes: Routes = [
  {
    path: '',
    component: NumberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumberPageRoutingModule {}
