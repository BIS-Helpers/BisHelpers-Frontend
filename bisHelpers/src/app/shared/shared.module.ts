import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LoadingComponent],
  imports: [CommonModule, RouterModule, ProgressBarModule],
  exports: [HeaderComponent, FooterComponent, LoadingComponent],
})
export class SharedModule {}
