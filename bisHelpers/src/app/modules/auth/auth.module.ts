import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

//components
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

//PrimeNG
import { PasswordModule } from 'primeng/password';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    PasswordModule,
  ],
  providers: [],
})
export class AuthModule {
  constructor() {
    console.log('AuthModule loaded');
  }
}
