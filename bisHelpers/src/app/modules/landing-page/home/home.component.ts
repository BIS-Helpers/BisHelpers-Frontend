import { Component } from '@angular/core';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  status: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  testimonials: Product[] | undefined;

  responsiveOptions: any[] | undefined;
  testProducts: Product[] = [
    {
      id: '1000',
      name: 'student 1',
      description: 'Description for Product 1',
      price: 100,
      status: 'INSTOCK',
    },
    {
      id: '1002',
      name: 'student 2',
      description: 'Description for Product 2',
      price: 200,
      status: 'LOWSTOCK',
    },
    {
      id: '1003',
      name: 'student 3',
      description: 'Description for Product 2',
      price: 200,
      status: 'LOWSTOCK',
    },
    {
      id: '1004',
      name: 'student 4',
      description: 'Description for Product 2',
      price: 200,
      status: 'LOWSTOCK',
    },
  ];

  ngOnInit() {
    this.testimonials = this.testProducts;
  }
}
