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
//PrimeNG Modules
import { CarouselModule } from 'primeng/carousel';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    FaqsComponent,
    FeaturesComponent,
    LandingPageComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedModule,
    CarouselModule,
    AccordionModule,
  ],
})
export class LandingPageModule {
  constructor() {
    console.log('landing');
  }
}
