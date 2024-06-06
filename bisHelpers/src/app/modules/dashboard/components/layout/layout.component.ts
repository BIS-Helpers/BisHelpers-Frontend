import { Component, OnDestroy, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Subscription } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  user: any;
  private localStorageSub: Subscription = new Subscription();

  constructor(
    private localStorageService: LocalStorageService,
    private authService: AuthService
  ) {
    this.user = this.localStorageService.getItem('user');
  }

  ngOnInit(): void {
    this.localStorageSub = this.localStorageService.user$.subscribe((user) => {
      this.user = user;
    });

    initFlowbite();
  }

  ngOnDestroy(): void {
    this.localStorageSub.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }
}
