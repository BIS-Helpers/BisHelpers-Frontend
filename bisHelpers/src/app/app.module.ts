import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//Ngrx
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {
  loginAuthFeatureKey,
  loginReducer,
} from 'src/app/modules/auth/store/login-reducer';
import { provideEffects } from '@ngrx/effects';
import * as loginEffects from 'src/app/modules/auth/store/login-effects';
import * as signupEffects from 'src/app/modules/auth/store/signup-effects';
import * as academicRegisterEffects from 'src/app/modules/dashboard/modules/registered-courses/store/registered-effect';
import { CoreModule } from './core/core.module';
import {
  signupAuthFeatureKey,
  signupReducer,
} from './modules/auth/store/signup-reducer';
import {
  academicRegisterFeatureKey,
  academicRegisterReducer,
} from './modules/dashboard/modules/registered-courses/store/registered-reduecer';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    RouterModule,
  ],
  providers: [
    provideStore(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
    provideState(loginAuthFeatureKey, loginReducer),
    provideState(signupAuthFeatureKey, signupReducer),
    provideState(academicRegisterFeatureKey, academicRegisterReducer),
    provideEffects(loginEffects, signupEffects, academicRegisterEffects),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
