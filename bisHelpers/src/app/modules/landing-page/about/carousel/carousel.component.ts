import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener,
} from '@angular/core';
interface students {
  name: string;
  track: string;
  imgUrl: string;
  linkedin: string;
  twitter: string;
  github?: string;
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  @ViewChild('carouselContainer') carouselContainer!: ElementRef;
  currentTranslation: number = 0;
  activeButtonIndex = 0;

  constructor() {}

  ngOnInit(): void {}

  teamMembers: students[] = [
    {
      name: 'Hoda AbdelQader',
      track: 'Front-End Developer',
      imgUrl: 'assets/images/member-2.jpg',
      linkedin: 'https://www.linkedin.com/in/hoda-abdelqader-/',
      twitter: '',
      github: 'https://github.com/Hodaabdelqader',
    },
    {
      name: 'Yousef Abodawoud',
      track: 'Front-End Developer',
      imgUrl: 'assets/images/member-1.jpg',
      linkedin: 'https://www.linkedin.com/in/abodawoud/',
      twitter: 'https://twitter.com/Abodaawoud',
      github: 'https://github.com/Abodawoud',
    },
    {
      name: 'Yousef Ahmed',
      track: 'Back-End Developer',
      imgUrl: 'assets/images/member-5.jpg',
      linkedin: 'https://www.linkedin.com/in/youssefahmed1/',
      twitter: 'https://twitter.com/joe_ahmed_',
      github: 'https://github.com/Youssef-AhmedX',
    },
    {
      name: 'Ziad Ehab',
      track: 'Back-End Developer',
      imgUrl: 'assets/images/member-3.jpg',
      linkedin: '',
      twitter: '',
      github: 'https://github.com/ZiadEhab15',
    },
    {
      name: 'Mego',
      track: 'Business Analyst',
      imgUrl: 'assets/images/member-6.jpg',
      linkedin: 'https://www.linkedin.com/in/ahmed-abdelmeged-86324b240/',
      twitter: '',
    },
    {
      name: 'Hefo',
      track: 'Business Analyst',
      imgUrl: 'assets/images/member-4.jpg',
      linkedin: 'https://www.linkedin.com/in/abdulrahman-al-hefnawi-4022b21b6/',
      twitter: '',
    },
  ];

  moveCarousel(distance: number, index: number) {
    this.currentTranslation = distance;
    this.activeButtonIndex = index;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.moveCarousel(0, 0);
  }
}
