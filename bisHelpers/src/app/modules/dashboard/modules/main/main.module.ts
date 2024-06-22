import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { MainRoutingRoutingModule } from './main-routing.module';
import { ChartModule } from 'primeng/chart';
import { PaginatorModule } from 'primeng/paginator';
import { TagModule } from 'primeng/tag';
import { SkeletonModule } from 'primeng/skeleton';
import { CheckboxModule } from 'primeng/checkbox';
import { ClockComponent } from '../../components/clock/clock.component';

@NgModule({
  declarations: [MainComponent, ClockComponent],
  imports: [
    CommonModule,
    RouterModule,
    MainRoutingRoutingModule,
    ChartModule,
    PaginatorModule,
    TagModule,
    SkeletonModule,
    CheckboxModule,
  ],
})
export class MainModule {
  constructor() {
    console.log('main');
  }
}
