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
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then( m => m.Tab4PageModule)
      },
      {
        path: 'alpha',
        loadChildren: () => import('../alpha/alpha.module').then( m => m.AlphaPageModule)
      },
      {
        path: 'number',
        loadChildren: () => import('../number/number.module').then( m => m.NumberPageModule)
      },
      {
        path: 'video',
        loadChildren: () => import('../video/video.module').then( m => m.VideoPageModule)
      },
      {
        path: 'story',
        loadChildren: () => import('../story/story.module').then( m => m.StoryPageModule)
      },
      {
        path: '',
        redirectTo: '/profile',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
