import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { AccessComponent } from './access/access.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PublicRoutingModule
  ],
  declarations: [
    PublicComponent,
    HomeComponent,
    AccessComponent
  ]
})
export class PublicModule { }
