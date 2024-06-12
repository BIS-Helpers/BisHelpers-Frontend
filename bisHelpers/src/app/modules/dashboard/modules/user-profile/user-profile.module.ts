import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserPageComponent } from './user-page/user-page.component';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';

//PrimeNG
import { CalendarModule } from 'primeng/calendar';
import { PasswordModule } from 'primeng/password';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { SkeletonModule } from 'primeng/skeleton';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';
import { RegisteredCoursesModule } from '../registered-courses/registered-courses.module';

@NgModule({
  declarations: [
    SettingsPageComponent,
    UserPageComponent,
    ProgressBarComponent,
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    CalendarModule,
    ReactiveFormsModule,
    PasswordModule,
    CoreModule,
    SkeletonModule,
    ToastModule,
    TooltipModule,
    RegisteredCoursesModule,
  ],
  providers: [MessageService],
})
export class UserProfileModule {
  constructor() {
    console.log('user-profile');
  }
}
