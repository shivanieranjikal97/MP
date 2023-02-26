import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GallerysPage } from './gallerys.page';

const routes: Routes = [
  {
    path: '',
    component: GallerysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GallerysPageRoutingModule {}
