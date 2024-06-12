import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTableComponent } from './create-table/create-table.component';
import { ViewTableComponent } from './view-table/view-table.component';
import { RegisteredCoursesRoutingModule } from './registered-courses-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { InputNumberModule } from 'primeng/inputnumber';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  declarations: [CreateTableComponent, ViewTableComponent],
  imports: [
    CommonModule,
    RegisteredCoursesRoutingModule,
    RouterModule,
    TableModule,
    DropdownModule,
    ReactiveFormsModule,
    ButtonModule,
    ToastModule,
    DialogModule,
    TooltipModule,
    InputNumberModule,
    SkeletonModule,
  ],
  exports: [CreateTableComponent, ViewTableComponent],
})
export class RegisteredCoursesModule {}
