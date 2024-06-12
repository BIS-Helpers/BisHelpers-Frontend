import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent {
  @Input() progress: number = 0;
  @Input() title: string = '';

  @HostBinding('style.--progress')
  get progressValue(): string {
    return `${this.progress}%`;
  }

  constructor() {}

  ngOnInit(): void {}
}
