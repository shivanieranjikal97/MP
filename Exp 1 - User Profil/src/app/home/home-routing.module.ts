import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'about',
    loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'about2',
    loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
