import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageRoutingModule } from './landing-page-routing.module';
//Landing Components
import { LandingPageComponent } from './landing-page.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { FaqsComponent } from './faqs/faqs.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    FaqsComponent,
    FeaturesComponent,
    LandingPageComponent,
  ],
  imports: [CommonModule, LandingPageRoutingModule,SharedModule]
})
export class LandingPageModule {
  constructor() {
    console.log('landing');
  }
}
