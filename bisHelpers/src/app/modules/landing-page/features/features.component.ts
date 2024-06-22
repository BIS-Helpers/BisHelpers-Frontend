import { Component } from '@angular/core';
interface card {
  id: number;
  icon: string;
  title: string;
  content: string;
}
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent {
  cards: card[] = [
    {
      id: 1,
      icon: 'assets/images/BisFamily.svg',
      title: 'BIS Family Plus',
      content: `Our BIS Family Plus feature enhances communication within 
        the BIS family group by filtering posts
        based on relevance to students' academic level.
        This streamlines the process of finding pertinent information,
        ensuring students can easily access updates and announcements 
        that are most relevant to their academic journey.`,
    },
    {
      id: 2,
      icon: 'assets/images/GpaAnalysis.svg',
      title: 'GPA Analysis',
      content: `We provides students 
        with in-depth analysis of their GPA, enabling them to gain 
        a comprehensive understanding of their academic performance. 
        This analysis serves as a valuable tool in identifying areas 
        for improvement and setting goals to achieve higher grades.`,
    },
    {
      id: 3,
      icon: 'assets/images/user.svg',
      title: 'Customized User Experience',
      content: `
        By accessing user-specific data, the system provides tailored content, recommendations, and interface customization.
        Users can manage profiles, update preferences,
        and monitor account activities, leading to more intuitive,
        secure, and satisfying interactions.`,
    },
  ];
}
