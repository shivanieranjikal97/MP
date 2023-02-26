import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'feedback',
        loadChildren: () => import('../feedback/feedback.module').then( m => m.FeedbackPageModule)
      } ,
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
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
      
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
