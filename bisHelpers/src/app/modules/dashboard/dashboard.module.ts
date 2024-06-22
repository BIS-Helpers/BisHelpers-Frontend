import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [LayoutComponent, DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    CoreModule,
  ],
})
export class DashboardModule {
  constructor() {
    console.log('dashboard');
  }
}
