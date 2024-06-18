import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Announcement } from '../../interfaces/posts';
import { AcademicCourses } from '../../interfaces/academic-courses';

interface PageEvent {
  first?: number;
  rows?: number;
  page?: number;
  pageCount?: number;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Announcement[] = [];
  filteredPosts: Announcement[] = [];
  paginatedPosts: Announcement[] = [];
  selectedCourses: number[] = [];
  Courses: AcademicCourses[] = [];
  isLoading: boolean = false;
  error: string = '';
  searchText: string = '';
  first: number = 0;
  totalRecords: number = 0;
  rows: number = 3;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.isLoading = true;
    this.postsService.getPosts().subscribe((posts) => {
      this.posts = posts.announcements;
      this.filteredPosts = posts.announcements;
      posts.academicCourses.push({
        code: 'General',
        creditHours: 0,
        id: 0,
        name: 'General',
      });
      this.Courses = posts.academicCourses;
      this.totalRecords = this.filteredPosts.length;
      this.paginate();
      this.isLoading = false;
    });
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

  updateDisplay() {
    if (this.selectedCourses.length === 0) {
      this.filteredPosts = this.posts;
    } else {
      this.filteredPosts = this.posts.filter((post) => {
        return (
          post.academicLecture &&
          this.selectedCourses.includes(post.academicLecture.academicCourse.id)
        );
      });
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
