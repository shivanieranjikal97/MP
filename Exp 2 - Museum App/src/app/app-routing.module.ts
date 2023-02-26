import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
 {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },   
  {
    path: 'oldmaster',
    loadChildren: () => import('./oldmaster/oldmaster.module').then( m => m.OldmasterPageModule)
  },
  {
    path: 'modernbrit',
    loadChildren: () => import('./modernbrit/modernbrit.module').then( m => m.ModernbritPageModule)
  },
  {
    path: 'miniature',
    loadChildren: () => import('./miniature/miniature.module').then( m => m.MiniaturePageModule)
  },
  {
    path: 'bloomsbury',
    loadChildren: () => import('./bloomsbury/bloomsbury.module').then( m => m.BloomsburyPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
