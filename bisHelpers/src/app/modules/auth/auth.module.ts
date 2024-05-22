import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

//components
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

//PrimeNG
import { PasswordModule } from 'primeng/password';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    PasswordModule,
    DropdownModule,
    CalendarModule,
    FormsModule
  ],
  providers: [],
})
export class AuthModule {
  constructor() {
    console.log('AuthModule loaded');
  }
}
