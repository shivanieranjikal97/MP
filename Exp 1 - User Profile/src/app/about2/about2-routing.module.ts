import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { About2Page } from './about2.page';

const routes: Routes = [
  {
    path: '',
    component: About2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class About2PageRoutingModule {}
