import { AcademicCourses } from 'src/app/modules/dashboard/modules/interfaces/academic-courses';
import { Professor } from 'src/app/modules/dashboard/modules/interfaces/professor';

export interface Student {
  fullName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  birthDate: string;
  level: string;
  collegeId: string;
  gpa: number;
  totalEarnedHours: number;
  registeredAcademicLectures: StudentRegisteredCourses[];
}

export interface StudentRegisteredCourses {
  academicCourse: AcademicCourses;
  day: string;
  groupNumber: string;
  id: number;
  professor: Professor;
  startTime: string;
}
