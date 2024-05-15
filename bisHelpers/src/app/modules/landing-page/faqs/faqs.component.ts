import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css'],
})
export class FaqsComponent {
  images: any[] | undefined = [
    { number: 1, source: 'assets/images/college-1.jpg' },
    { number: 2, source: 'assets/images/college-2.jpg' },
    { number: 3, source: 'assets/images/college-3.jpg' },
  ];
}
