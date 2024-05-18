import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { FaqsComponent } from './faqs/faqs.component';
import { AboutComponent } from './about/about.component';
import { LandingPageComponent } from './landing-page.component';

const childRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'features',
    component: FeaturesComponent,
  },
  {
    path: 'faqs',
    component: FaqsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: childRoutes,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
