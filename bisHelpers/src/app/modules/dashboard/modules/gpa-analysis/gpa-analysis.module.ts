import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { GpaAnalysisRoutingModule } from './gpa-analysis-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, GpaAnalysisRoutingModule, RouterModule],
})
export class GpaAnalysisModule {
  constructor() {
    console.log('gpa-analysis');
  }
}
