import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Announcement } from '../interfaces/posts';
import { AcademicCourses } from '../interfaces/academic-courses';
import { GpaService } from '../services/gpa.service';
import { GpaReport } from '../interfaces/gpa-report';
import { StudentRegisteredCourses } from 'src/app/core/interfaces/student';
interface PageEvent {
  first?: number;
  rows?: number;
  page?: number;
  pageCount?: number;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  day: number = 6;
  posts: Announcement[] = [];
  filteredPosts: Announcement[] = [];
  paginatedPosts: Announcement[] = [];
  selectedCourses: number[] = [];
  Courses: AcademicCourses[] = [];
  isLoading: boolean = true;
  error: string = '';
  searchText: string = '';
  first: number = 0;
  totalRecords: number = 0;
  rows: number = 3;

  // Variables for the first chart (Hours)
  hoursData: any;
  hoursOptions: any;

  // Variables for the second chart (GPA)
  gpaData: any;
  gpaOptions: any;

  gpaReport$ = this.gpaService.getGpaAnalysis();
  gpaReport!: GpaReport;
  minGradeToSaveGpa = '';
  GPA = 0;
  Grade = '';
  GPAStimulation = 0;
  AcademicLectures: StudentRegisteredCourses[] = [];
  points: number[] = [];
  totalEarnedPoints = 0;
  totalCurrentHours = 0;
  totalEarnedHours = 0;
  totalHours = 129;
  MaxGpa = 0;
  MinGpa = 0;
  semesterGpa = 0;

  constructor(
    private postsService: PostsService,
    private gpaService: GpaService
  ) {}

  ngOnInit() {
    this.postsService.getPostByDay(this.day).subscribe((posts) => {
      this.isLoading = false;
      this.filteredPosts = posts.announcements;
      this.Courses = posts.academicCourses;
      this.totalRecords = this.filteredPosts.length;
      this.paginate();
    });

    this.gpaReport$.subscribe((data) => {
      this.gpaReport = data;
      this.totalEarnedHours = this.gpaReport.totalEarnedHours;
      this.initializeChartForHours();
      this.initializeChartForGpa();
    });
  }

  initializeChartForHours() {
    const documentStyle = getComputedStyle(document.documentElement);

    this.hoursData = {
      labels: ['Total Completed Hours', 'Total Hours'],
      datasets: [
        {
          data: [this.totalEarnedHours, this.totalHours],
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgb(142, 142, 142, 0.2)',
          ],
          borderColor: ['rgba(75, 192, 192)', 'rgb(142, 142, 142)'],
          borderWidth: 1,
        },
      ],
    };

    this.hoursOptions = {
      cutout: '60%', // Adjust the cutout percentage for the doughnut chart
      responsive: true, // Ensures the chart scales with the container
      maintainAspectRatio: false, // Allows the chart to resize freely
      plugins: {
        legend: {
          labels: {
            color: documentStyle.getPropertyValue('--gray-700'),
          },
        },
      },
    };
  }

  initializeChartForGpa() {
    this.gpaData = {
      labels: [
        'Excellent',
        'Very Good',
        'Good',
        'Accepted',
        'Poor',
        'Very Poor',
      ],
      datasets: [
        {
          label: 'GPA',
          data: [4.0, 3.4, 2.8, 2.4, 2.0, 1.4], // Example data
          backgroundColor: [
            'rgba(34, 139, 34, 0.2)', // Dark green (Excellent)
            'rgba(60, 179, 113, 0.2)', // Medium green (Good)
            'rgba(144, 238, 144, 0.2)', // Light green (OK)
            'rgba(255, 165, 0, 0.2)', // Orange (Accepted)
            'rgba(255, 99, 71, 0.2)', // Light red (Poor)
            'rgba(139, 0, 0, 0.2)', // Dark red (Very Poor)
          ],
          borderColor: [
            'rgb(34, 139, 34)', // Dark green
            'rgb(60, 179, 113)', // Medium green
            'rgb(144, 238, 144)', // Light green
            'rgb(255, 165, 0)', // Orange
            'rgb(255, 99, 71)', // Light red
            'rgb(139, 0, 0)', // Dark red
          ],
          borderWidth: 1,
        },
      ],
    };

    this.gpaOptions = {
      cutout: '60%', // Adjust the cutout percentage for the doughnut chart
      responsive: true, // Ensures the chart scales with the container
      maintainAspectRatio: false, // Allows the chart to resize freely
      plugins: {
        legend: {
          labels: {},
        },
      },
    };
  }

  filterPosts() {
    if (!this.searchText.trim()) {
      this.filteredPosts = this.posts;
    } else {
      this.filteredPosts = this.posts.filter(
        (post) =>
          post.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
          post.content.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
    this.totalRecords = this.filteredPosts.length;
    this.paginate();
  }

  onPageChange(event: PageEvent) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 5;
    this.paginate();
  }

  paginate() {
    const start = this.first;
    const end = this.first + this.rows;
    this.paginatedPosts = this.filteredPosts.slice(start, end);
  }

  getTimeDifference(createdOn: string): string {
    const now = new Date();
    const diffInMilliseconds = now.getTime() - new Date(createdOn).getTime();
    const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInWeeks = Math.floor(diffInDays / 7);
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYears = Math.floor(diffInDays / 365);

    if (diffInYears > 0) {
      return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
    } else if (diffInMonths > 0) {
      return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
    } else if (diffInWeeks > 0) {
      return `${diffInWeeks} week${diffInWeeks > 1 ? 's' : ''} ago`;
    } else if (diffInDays > 0) {
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    } else if (diffInHours > 0) {
      return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    } else if (diffInMinutes > 0) {
      return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
    } else {
      return 'Just now';
    }
  }

  formatTime(time: string): string {
    const [hour, minute] = time.split(':');
    const date = new Date();
    date.setHours(+hour, +minute);
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
    };
    return date.toLocaleTimeString('en-US', options);
  }
}
