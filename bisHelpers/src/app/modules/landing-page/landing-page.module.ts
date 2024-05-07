import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageRoutingModule } from './landing-page-routing.module';
//Landing Components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { FaqsComponent } from './faqs/faqs.component';

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
