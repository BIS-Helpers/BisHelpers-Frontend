import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { MainRoutingRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, RouterModule, MainRoutingRoutingModule],
})
export class MainModule {
  constructor() {
    console.log('main');
  }
}
