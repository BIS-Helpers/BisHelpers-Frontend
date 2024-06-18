import { StudentRegisteredCourses } from 'src/app/core/interfaces/student';
import { AcademicCourses } from './academic-courses';

export interface Posts {
  academicCourses: AcademicCourses[];
  announcements: Announcement[];
}
export interface Announcement {
  id: number;
  title: string;
  content: string;
  academicLecture: StudentRegisteredCourses | null;
  createdOn: string;
  lastUpdatedOn: string;
}
