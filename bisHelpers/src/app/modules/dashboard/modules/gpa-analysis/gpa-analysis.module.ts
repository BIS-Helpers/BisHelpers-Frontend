import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { GpaAnalysisRoutingModule } from './gpa-analysis-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ReportComponent } from './report/report.component';
import { GradesDegreesPointsTableComponent } from './grades-degrees-points-table/grades-degrees-points-table.component';

import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { SkeletonModule } from 'primeng/skeleton';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    FormComponent,
    ReportComponent,
    GradesDegreesPointsTableComponent,
  ],
  imports: [
    CommonModule,
    GpaAnalysisRoutingModule,
    RouterModule,
    ChartModule,
    SkeletonModule,
    TableModule,
    DropdownModule,
    ReactiveFormsModule,
    DialogModule,
    ButtonModule,
  ],
})
export class GpaAnalysisModule {
  constructor() {
    console.log('gpa-analysis');
  }
}
