import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,

  },
  {
    path: 'oldmaster',
    loadChildren: () => import('../oldmaster/oldmaster.module').then( m => m.OldmasterPageModule)
  },
  {
    path: 'modernbrit',
    loadChildren: () => import('../modernbrit/modernbrit.module').then( m => m.ModernbritPageModule)
  },
  {
    path: 'miniature',
    loadChildren: () => import('../miniature/miniature.module').then( m => m.MiniaturePageModule)
  },
  {
    path: 'bloomsbury',
    loadChildren: () => import('../bloomsbury/bloomsbury.module').then( m => m.BloomsburyPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
