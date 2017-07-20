import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessComponent } from './access/access.component';
import { HomeComponent } from './home/home.component';
import { PublicComponent } from './public.component';

const publicRoutes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'access',
        component: AccessComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      publicRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class PublicRoutingModule { }
