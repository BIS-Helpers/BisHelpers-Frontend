import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { BisFamilyPlusRoutingModule } from './bis-family-plus-routing.module';
import { SkeletonModule } from 'primeng/skeleton';
import { FilterService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { CheckboxModule } from 'primeng/checkbox';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    BisFamilyPlusRoutingModule,
    FormsModule,
    SkeletonModule,
    InputTextModule,
    ButtonModule,
    TagModule,
    CheckboxModule,
    PaginatorModule,
  ],
  providers: [FilterService],
})
export class BisFamilyPlusModule {
  constructor() {
    console.log('bis-family-plus');
  }
}
