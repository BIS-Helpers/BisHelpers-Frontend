import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent {
  // constructor() {}

  // ngOnInit(): void {
  //   this.startClock();
  // }

  // startClock() {
  //   const hours = document.querySelector('.hours') as HTMLElement;
  //   const minutes = document.querySelector('.minutes') as HTMLElement;
  //   const seconds = document.querySelector('.seconds') as HTMLElement;

  //   const updateClock = () => {
  //     const now = new Date();
  //     const h = (now.getHours() % 12) + now.getMinutes() / 59; // 22 % 12 = 10pm
  //     const m = now.getMinutes(); // 0 - 59
  //     const s = now.getSeconds(); // 0 - 59

  //     hours.style.transform = `rotate(${h * 30}deg)`; // 12 * 30 = 360deg
  //     minutes.style.transform = `rotate(${m * 6}deg)`; // 60 * 6 = 360deg
  //     seconds.style.transform = `rotate(${s * 6}deg)`; // 60 * 6 = 360deg
  //   };

  //   updateClock();
  //   setInterval(updateClock, 1000);
  // }

  timer = {
    day: '',
    hours: '',
    minutes: '',
    seconds: '',
  };

  constructor() {}

  ngOnInit(): void {
    this.updateTime(); // Initial call to set time immediately
    setInterval(() => {
      this.updateTime(); // Update time every second
    }, 1000);
  }

  updateTime(): void {
    const now = new Date();
    this.timer.day = this.getDayOfWeek(now);
    this.timer.hours = this.formatNumber(now.getHours());
    this.timer.minutes = this.formatNumber(now.getMinutes());
    this.timer.seconds = this.formatNumber(now.getSeconds());
  }

  private getDayOfWeek(date: Date): string {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
  }

  private formatNumber(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }
}
