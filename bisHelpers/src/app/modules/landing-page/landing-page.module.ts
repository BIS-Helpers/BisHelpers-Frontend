import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FaqsComponent } from './faqs/faqs.component';
import { FeaturesComponent } from './features/features.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    FaqsComponent,
    FeaturesComponent,
  ],
  imports: [CommonModule, LandingPageRoutingModule],
})
export class LandingPageModule {
  constructor() {
    console.log('landing');
  }
}
