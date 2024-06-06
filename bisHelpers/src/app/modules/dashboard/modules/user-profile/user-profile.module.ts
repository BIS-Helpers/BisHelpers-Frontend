import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserPageComponent } from './user-page/user-page.component';

//PrimeNG
import { CalendarModule } from 'primeng/calendar';
import { PasswordModule } from 'primeng/password';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { SkeletonModule } from 'primeng/skeleton';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [SettingsPageComponent, UserPageComponent],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    CalendarModule,
    ReactiveFormsModule,
    PasswordModule,
    CoreModule,
    SkeletonModule,
    ToastModule,
  ],
  providers: [MessageService],
})
export class UserProfileModule {
  constructor() {
    console.log('user-profile');
  }
}
