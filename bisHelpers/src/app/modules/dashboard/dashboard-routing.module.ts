import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { DashboardComponent } from './dashboard.component';
import { AcademicRegisterationGuard } from 'src/app/core/guards/academic-registeration.guard';
import { RegisteredCoursesGuard } from 'src/app/core/guards/registered-courses.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'gpa-analysis',
        loadChildren: () =>
          import('./modules/gpa-analysis/gpa-analysis.module').then(
            (m) => m.GpaAnalysisModule
          ),
      },
      {
        path: 'user-profile',
        loadChildren: () =>
          import('./modules/user-profile/user-profile.module').then(
            (m) => m.UserProfileModule
          ),
      },
      {
        path: 'bis-family-plus',
        loadChildren: () =>
          import('./modules/bis-family-plus/bis-family-plus.module').then(
            (m) => m.BisFamilyPlusModule
          ),
      },
      {
        path: 'weekly-updates',
        loadChildren: () =>
          import('./modules/weekly-updates/weekly-updates.module').then(
            (m) => m.WeeklyUpdatesModule
          ),
      },
      {
        path: 'registered-courses',
        loadChildren: () =>
          import('./modules/registered-courses/registered-courses.module').then(
            (m) => m.RegisteredCoursesModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./modules/main/main.module').then((m) => m.MainModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
