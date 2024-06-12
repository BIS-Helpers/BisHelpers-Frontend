import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTableComponent } from './create-table/create-table.component';

const routes: Routes = [
  {
    path: '',
    component: CreateTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisteredCoursesRoutingModule {}
