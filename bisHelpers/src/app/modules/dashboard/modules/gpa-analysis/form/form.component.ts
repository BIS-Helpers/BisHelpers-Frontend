import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { GpaService } from '../../services/gpa.service';
import { GpaReport } from '../../interfaces/gpa-report';
import { StudentRegisteredCourses } from 'src/app/core/interfaces/student';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  categories: { rating: string; minPoints: number; maxPoints: number }[] = [
    { rating: 'Excellent', minPoints: 3.4, maxPoints: 4.0 },
    { rating: 'Very Good', minPoints: 2.8, maxPoints: 3.4 },
    { rating: 'Good', minPoints: 2.4, maxPoints: 2.8 },
    { rating: 'Accepted', minPoints: 2.0, maxPoints: 2.4 },
    { rating: 'Poor', minPoints: 1.4, maxPoints: 2.0 },
    { rating: 'Very Poor', minPoints: 0.0, maxPoints: 1.4 },
  ];

  grades = [
    { grade: 'A+', points: 4 },
    { grade: 'A', points: 3.75 },
    { grade: 'B+', points: 3.4 },
    { grade: 'B', points: 3.1 },
    { grade: 'C+', points: 2.8 },
    { grade: 'C', points: 2.5 },
    { grade: 'D+', points: 2.25 },
    { grade: 'D', points: 2 },
    { grade: 'F', points: 0 },
  ];
  visible: boolean = false;

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
  form: FormGroup;

  constructor(private gpaService: GpaService, private fb: FormBuilder) {
    this.form = this.fb.group({
      lectures: this.fb.array([]),
    });
  }

  ngOnInit() {
    this.gpaReport$.subscribe((data) => {
      this.gpaReport = data;
      this.minGradeToSaveGpa = this.gpaReport.minGradeToSaveGpa;
      this.GPA = this.gpaReport.gpa;
      this.Grade = this.getGradeFromGpa(this.GPA);
      this.GPAStimulation = this.gpaReport.gpaBasedOnMinGrade;
      this.AcademicLectures = this.gpaReport.registeredAcademicLectures;
      this.totalEarnedPoints = this.gpaReport.totalEarnedPoints;
      this.totalCurrentHours = this.gpaReport.totalCurrentHours;
      this.initializeForm();
    });
  }

  get lecturesArray(): FormArray {
    return this.form.get('lectures') as FormArray;
  }

  private initializeForm() {
    this.AcademicLectures.forEach((lecture) => {
      const defaultGrade = this.grades.find((g) => {
        console.log('G:', g.grade, this.minGradeToSaveGpa);

        return g.grade === this.minGradeToSaveGpa;
      });
      this.lecturesArray.push(
        this.fb.group({
          academicCourse: [lecture.academicCourse.name],
          creditHours: [lecture.academicCourse.creditHours],
          professor: [lecture.professor.fullName],
          selectedGrade: [defaultGrade, Validators.required],
        })
      );
    });
  }

  private getGradeFromGpa(gpa: number): string {
    for (const category of this.categories) {
      if (gpa >= category.minPoints && gpa <= category.maxPoints) {
        return category.rating;
      }
    }
    return 'Unknown';
  }

  getLectureFormGroup(index: number): FormGroup {
    return this.lecturesArray.at(index) as FormGroup;
  }

  onSubmit() {
    const rowDataWithPoints = this.lecturesArray.controls.map((control) => {
      const grade = control.get('selectedGrade')?.value;
      const creditHours = control.get('creditHours')?.value;
      const points = grade ? grade.points : 0; // Default to 0 if grade is not selected
      console.log('Points:', points);

      return {
        points: points,
        creditHours: creditHours,
      };
    });
    this.calculateStimulatedGPA(rowDataWithPoints);
    console.log('Row Data with Points and Credit Hours:', rowDataWithPoints);
  }

  private calculateStimulatedGPA(
    rowData: { points: number; creditHours: number }[]
  ) {
    let stimulatedPoints = this.totalEarnedPoints;
    for (let index = 0; index < rowData.length; index++) {
      const element = rowData[index];
      stimulatedPoints += element.points * element.creditHours;
    }
    const stimulatedGPA = stimulatedPoints / this.totalCurrentHours;
    this.GPAStimulation = +stimulatedGPA;
    console.log('Stimulated GPA:', stimulatedGPA);
  }

  showDialog() {
    this.visible = true;
  }
}
