import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { GpaAnalysisComponent } from './components/gpa-analysis/gpa-analysis.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'GpaAnalysis',
        component: GpaAnalysisComponent,
      },
    ],

    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class DashboardRoutingModule {}
