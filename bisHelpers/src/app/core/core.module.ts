import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../modules/auth/services/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './services/jwt.interceptor';
//where to add interfaces
//answer: core module is the best place to add interfaces at the providers or
@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  exports: [],
})
export class CoreModule {}
