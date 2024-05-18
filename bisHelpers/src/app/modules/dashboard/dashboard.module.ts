import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { GpaAnalysisComponent } from './components/gpa-analysis/gpa-analysis.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LayoutComponent, GpaAnalysisComponent],
  imports: [CommonModule, DashboardRoutingModule, RouterModule],
})
export class DashboardModule {
  constructor() {
    console.log('dashboard');
  }
}
