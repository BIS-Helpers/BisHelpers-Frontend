import { Component } from '@angular/core';
interface card {
  id: number
  icon: string
  title: string
  content: string
}
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  cards: card[] = [{
    id: 1,
    icon: 'assets/images/BisFamily.svg',
    title: 'BIS Family Plus',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat`
  },
  {
    id: 2,
    icon: 'assets/images/GpaAnalysis.svg',
    title: 'GPA Analysis',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat`
  },
  {
    id: 3,
    icon: 'assets/images/WeeklyUpdates.svg',
    title: 'Weekly Updates',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat`
  },
  {
    id: 4,
    icon: 'assets/images/WeeklyUpdates.svg',
    title: 'Weekly Updates',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat`
  },
  {
    id: 5,
    icon: 'assets/images/WeeklyUpdates.svg',
    title: 'Weekly Updates',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat`
  },
  {
    id: 5,
    icon: 'assets/images/WeeklyUpdates.svg',
    title: 'Weekly Updates',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat`
  }]
}

