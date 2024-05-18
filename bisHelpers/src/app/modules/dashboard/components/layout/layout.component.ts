import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  user: any;
  constructor(
    private localStorageService: LocalStorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.user = this.localStorageService.getItem('user');
    console.log(this.user);

    initFlowbite();
  }
}
