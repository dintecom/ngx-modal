import { Routes } from '@angular/router';
import { Sample1Component } from './sample1-simple-usage/sample1.component';
import { NoCloseButtonModalComponent } from './sample2-routing-modal/no-close-button-modal.component';
import { NoSimpleCloseModalComponent } from './sample2-routing-modal/no-simple-close-modal.component';
import { Sample2Component } from './sample2-routing-modal/sample2.component';
import { SimpleRouterModalComponent } from './sample2-routing-modal/simple-router-modal.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Sample1Component,
  },
  {
    path: 'route-modals',
    component: Sample2Component,
    children: [
      {
        path: 'simple-modal',
        component: SimpleRouterModalComponent,
      },
      {
        path: 'no-close-button-modal',
        component: NoCloseButtonModalComponent,
      },
      {
        path: 'no-simple-close-modal',
        component: NoSimpleCloseModalComponent,
      },
    ],
  },
];
