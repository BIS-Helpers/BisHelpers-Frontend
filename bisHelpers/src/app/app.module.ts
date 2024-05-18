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
  authFeatureKey,
  authReducer,
} from 'src/app/modules/auth/store/login-reducer';
import { provideEffects } from '@ngrx/effects';
import * as authEffects from 'src/app/modules/auth/store/login-effects';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
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
    provideState(authFeatureKey, authReducer),
    provideEffects(authEffects),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
