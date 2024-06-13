import { StudentRegisteredCourses } from 'src/app/core/interfaces/student';

export interface GpaReport {
  collegeId: string;
  fullName: string;
  gpa: number;
  level: string;
  minGradeToSaveGpa: string;
  minPointsToSaveGpa: number;
  registeredAcademicLectures: StudentRegisteredCourses[];
  totalEarnedHours: number;
  totalEarnedPoints: number;
  totalPoints: number;
  totalCurrentHours: number;
  totalCurrentPoints: number;
  pointsBasedOnMinGrade: number;
  gpaBasedOnMinGrade: number;
}
