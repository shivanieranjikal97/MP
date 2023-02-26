import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
   // loadChildren: () => import('./design/design.module').then(m => m.DesignPageModule)
  },
  {
  path:'tabs',
  children:[
    {
      path: 'tab1',
      loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
    },
    {
      path: 'tab2',
      loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
    },
    {
      path: 'tab3',
      loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
    },
  {
    path: 'faculty',
    loadChildren: () => import('./faculty/faculty.module').then( m => m.FacultyPageModule)
  },
  {
    path: 'gallerys',
    loadChildren: () => import('./gallerys/gallerys.module').then( m => m.GallerysPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./event/event.module').then( m => m.EventPageModule)
  },
  {
    path: 'syllabus',
    loadChildren: () => import('./syllabus/syllabus.module').then( m => m.SyllabusPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'design',
    loadChildren: () => import('./design/design.module').then( m => m.DesignPageModule)
  },
  {
    path: 'placement',
    loadChildren: () => import('./placement/placement.module').then( m => m.PlacementPageModule)
  },
  {
    path: 'exams',
    loadChildren: () => import('./exams/exams.module').then( m => m.ExamsPageModule)
  },
  {
    path: 'attendance',
    loadChildren: () => import('./attendance/attendance.module').then( m => m.AttendancePageModule)
  }]
},
  {
    path: 'sign',
    loadChildren: () => import('./sign/sign.module').then( m => m.SignPageModule)
  }
 
]
;

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
