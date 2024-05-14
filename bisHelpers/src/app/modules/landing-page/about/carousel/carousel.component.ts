import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
interface students{
  name:string;
  track:string;
  imgUrl:string;
  linkedin:string
  twitter:string;
  get:string;
 }
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @ViewChild('carouselContainer') carouselContainer!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    
  }

  teamMembers: students[]=[
    {
      name: "Hoda AbdelQader",
      track: 'g',
      imgUrl: 'assets/images/testimonial.jpg',
      linkedin:'',
      twitter:'',
      get:''
      
    },
    {
      name: "Yousef abo dawoud",
      track: 'f',
      imgUrl: 'assets/images/testimonial.jpg',
      linkedin:'',
      twitter:'',
      get:''
    },
    {
      name: "Yousef Ahmed",
      track: 'g',
      imgUrl: 'assets/images/testimonial.jpg',
      linkedin:'',
      twitter:'',
      get:''
    },
    {
      name: "Mego",
      track: 'f',
      imgUrl: 'assets/images/testimonial.jpg',
      linkedin:'',
      twitter:'',
      get:''
    }
    ,{
      name: "Ziad",
      track: 'f',
      imgUrl: 'assets/images/testimonial.jpg',
      linkedin:'',
      twitter:'',
      get:''
    },
    {
      name: "Hefo",
      track: 'f',
      imgUrl: 'assets/images/testimonial.jpg',
      linkedin:'',
      twitter:'',
      get:''
    }
  ];
   }
