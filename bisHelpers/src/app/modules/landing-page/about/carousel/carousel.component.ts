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
  autoplayInterval: number = 0; 
  autoplayTimer: any;
  numscroll:number=2.5;

  ngOnInit(): void {
    
  }

  // startAutoplay(): void {
  //   this.autoplayTimer = setInterval(() => {
  //     this.scrollRight(); 
  //   }, this.autoplayInterval);
  // }

  // stopAutoplay(): void {
  //   clearInterval(this.autoplayTimer);
  // }

  // ngOnDestroy(): void {
  //   this.stopAutoplay();
  // }

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
  // scrollLeft(): void {
  //   const sectionWidth = this.carouselContainer.nativeElement.clientWidth / 3; // Calculate width of each section
  //   const currentPosition = this.carouselContainer.nativeElement.scrollLeft;
  //   const targetPosition = currentPosition - sectionWidth;
  
  //   if (targetPosition < 0) {
  //     // Scroll to the last section
  //     this.carouselContainer.nativeElement.scrollTo({
  //       left: this.carouselContainer.nativeElement.scrollWidth,
  //       behavior: 'smooth'
  //     });
  //   } else {
  //     // Scroll to the previous section
  //     this.carouselContainer.nativeElement.scrollTo({
  //       left: targetPosition,
  //       behavior: 'smooth'
  //     });
  //   }
  // }
  
  // scrollRight(): void {
  //   const sectionWidth = this.carouselContainer.nativeElement.clientWidth / 3; // Calculate width of each section
  //   const currentPosition = this.carouselContainer.nativeElement.scrollLeft;
  //   const targetPosition = currentPosition + sectionWidth;
  
  //   if (targetPosition > this.carouselContainer.nativeElement.scrollWidth) {
  //     // Scroll to the first section
  //     this.carouselContainer.nativeElement.scrollTo({
  //       left: 0,
  //       behavior: 'smooth'
  //     });
  //   } else {
  //     // Scroll to the next section
  //     this.carouselContainer.nativeElement.scrollTo({
  //       left: targetPosition,
  //       behavior: 'smooth'
  //     });
  //   }
  // }
  
  // scrollHalf(): void {
  //   const sectionWidth = this.carouselContainer.nativeElement.clientWidth / 3; // Calculate width of each section
  //   const currentPosition = this.carouselContainer.nativeElement.scrollRight;
  //   const targetPosition = currentPosition -sectionWidth;
  
  //   if (targetPosition > currentPosition) {
  //     // Scroll to the next section
  //     this.carouselContainer.nativeElement.scrollTo({
  //       left: targetPosition,
  //       behavior: 'smooth'
  //     });
  //   } else {
  //     // Scroll to the previous section
  //     this.carouselContainer.nativeElement.scrollTo({
  //       left: currentPosition - sectionWidth,
  //       behavior: 'smooth'
  //     });
  //   }
  // }
  
  

  
  
  }
