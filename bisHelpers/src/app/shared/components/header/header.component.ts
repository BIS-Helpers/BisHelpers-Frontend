import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  IsAllowed: boolean = false;
  localStorageIsAllowedSub: Subscription = new Subscription();

  constructor(private localStorageService: LocalStorageService) {
    this.IsAllowed = this.localStorageService.getItem('accessToken');
  }
}
