import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
interface Product {
    id: string;
    name: string;
    description: string;
    status: string;
  }
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
 export class AboutComponent{
    testimonials: Product[] | undefined;

  responsiveOptions: any[] | undefined;
  testProducts: Product[] = [
    {
      id: '1000',
      name: 'student 1',
      description: 'Description for Product 1',
      status: 'INSTOCK',
    },
    {
      id: '1002',
      name: 'student 2',
      description: 'Description for Product 2',
      status: 'LOWSTOCK',
    },
    {
        id: '1003',
        name: 'student 3',
        description: 'Description for Product 2',
        status: 'LOWSTOCK',
      },
      {
        id: '1004',
        name: 'student 4',
        description: 'Description for Product 2',
        status: 'LOWSTOCK',
      },
      {
        id: '1005',
        name: 'student 5',
        description: 'Description for Product 2',
        status: 'LOWSTOCK',
      },
      {
        id: '1006',
        name: 'student 6',
        description: 'Description for Product 2',
        status: 'LOWSTOCK',
      },
  ];

  ngOnInit() {
    this.testimonials = this.testProducts;
  }
 }
