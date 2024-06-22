import { Component, OnInit } from '@angular/core';
import { AcademicRegisterationService } from '../../services/academic-registeration.service';
import { AcademicCourses } from '../../interfaces/academic-courses';
import { Professor, lectures } from '../../interfaces/professor';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import { Store } from '@ngrx/store';
import { academicRegisterActions } from '../store/registered-action';
import { AcademicRegisterRequest } from '../../interfaces/register-request';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-create-table',
  templateUrl: './create-table.component.html',
  styleUrls: ['./create-table.component.css'],
  providers: [MessageService],
})
export class CreateTableComponent implements OnInit {
  mainForm: FormGroup;
  courses: AcademicCourses[] = [];
  cols: Column[] = [
    { field: 'course', header: 'Course' },
    { field: 'professor', header: 'Professor' },
    { field: 'lecture', header: 'Lecture' },
  ];
  academicCourse$ = this.academicService.getAllAcademicCourse();
  hasDuplicateCourses = false;
  isLoading = true;
  visible: boolean = false;

  constructor(
    private academicService: AcademicRegisterationService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private store: Store
  ) {
    this.mainForm = this.createFormGroup();
  }

  ngOnInit() {
    this.initializeCourses();
  }

  createFormGroup(): FormGroup {
    return this.fb.group({
      rows: this.fb.array([]),
      totalGPA: [null, Validators.required],
      completedHours: [null, Validators.required],
    });
  }

  initializeCourses() {
    this.academicCourse$.subscribe((courses) => {
      if (courses) {
        this.isLoading = false;
        this.courses = courses;
        this.ensureMinimumRows();
      }
    });
  }

  ensureMinimumRows() {
    let rowLength = this.rowsArray.length;
    while (rowLength < 3) {
      this.addRow();
      rowLength++;
    }
  }

  get rowsArray(): FormArray {
    return this.mainForm.get('rows') as FormArray;
  }

  addRow() {
    const row = this.createRow();
    this.setupCourseValueChanges(row);
    this.setupProfessorValueChanges(row);

    if (this.rowsArray.length < 6) {
      this.rowsArray.push(row);
    }
  }

  createRow(): FormGroup {
    return this.fb.group({
      course: [null, Validators.required],
      professor: [{ value: null, disabled: true }, Validators.required],
      lecture: [{ value: null, disabled: true }, Validators.required],
      professors: [[] as Professor[]],
      lectures: [[] as { label: string; value: lectures }[]],
    });
  }

  setupCourseValueChanges(row: FormGroup) {
    row
      .get('course')!
      .valueChanges.pipe(
        switchMap((course: AcademicCourses | null) => {
          this.resetProfessorAndLecture(row);
          if (course?.id) {
            row.get('professor')!.enable();
            return this.academicService.getProfessorCourses(course.id);
          } else {
            row.get('professor')!.disable();
            row.get('lecture')!.disable();
            return [];
          }
        })
      )
      .subscribe((professors: Professor[]) => {
        row.patchValue({ professors });
        this.resetProfessorAndLecture(row);
      });
  }

  setupProfessorValueChanges(row: FormGroup) {
    row
      .get('professor')!
      .valueChanges.subscribe((professor: Professor | null) => {
        const selectedProfessor = this.findSelectedProfessor(row, professor);
        const lectures = selectedProfessor
          ? this.mapLectures(selectedProfessor)
          : [];
        row.patchValue({ lectures });
        this.toggleLectureControl(row, professor?.id);
      });
  }

  resetProfessorAndLecture(row: FormGroup) {
    row.get('professor')!.reset();
    row.get('lecture')!.reset();
  }

  findSelectedProfessor(row: FormGroup, professor: Professor | null) {
    return row.value.professors?.find((p: Professor) => p.id === professor?.id);
  }

  mapLectures(professor: Professor) {
    return professor.academicLectures.map((lecture) => ({
      label: `G(${lecture.groupNumber}) ${lecture.day} ${lecture.startTime}`,
      value: lecture,
    }));
  }

  toggleLectureControl(row: FormGroup, professorId: number | undefined) {
    if (professorId) {
      row.get('lecture')!.enable();
    } else {
      row.get('lecture')!.disable();
    }
    row.get('lecture')!.reset();
  }

  removeRow(index: number) {
    if (index >= 3) {
      this.rowsArray.removeAt(index);
      this.checkDuplicateCourses();
    }
  }

  checkDuplicateCourses() {
    const courses = this.getCourses();
    const courseIds = courses.map((course) => course.id);
    const hasDuplicates = this.hasDuplicateCourseIds(courseIds);
    this.handleDuplicateCourses(hasDuplicates);
  }

  getCourses(): AcademicCourses[] {
    return this.rowsArray.controls
      .map((row) => row.get('course')?.value)
      .filter((course) => course !== null);
  }

  hasDuplicateCourseIds(courseIds: number[]): boolean {
    return courseIds.some(
      (courseId, index) => courseIds.indexOf(courseId) !== index
    );
  }

  handleDuplicateCourses(hasDuplicates: boolean) {
    this.hasDuplicateCourses = hasDuplicates;
    if (hasDuplicates) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Duplicate courses selected!',
      });
    }
  }

  getLectures(): any[] {
    return this.rowsArray.controls
      .map((row) => row.get('lecture')?.value)
      .filter((lecture) => lecture !== null);
  }

  onSubmit() {
    const lectures = this.getLectures();

    // Check for duplicate lecture start times on the same day and exact start time
    const duplicateStartTimes = lectures.some((lecture, index) => {
      const lectureDay = lecture.value.day;
      const lectureStartTime = lecture.value.startTime;
      return lectures.some((otherLecture, otherIndex) => {
        return (
          otherIndex !== index &&
          otherLecture.value.day === lectureDay &&
          otherLecture.value.startTime === lectureStartTime
        );
      });
    });
    console.log('Duplicate Start Times:', duplicateStartTimes);

    if (this.hasDuplicateCourses) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please remove duplicate courses before submitting.',
      });
    } else if (duplicateStartTimes) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Duplicate lecture start times on the same day and time found!',
      });
    } else if (this.mainForm.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please fill all fields as required before submitting.',
      });
    } else {
      const lectureIds: number[] = lectures.map((lecture) => lecture.value.id);
      const gpa = this.mainForm.get('totalGPA')?.value;
      const totalEarnedHours = this.mainForm.get('completedHours')?.value;

      const request: AcademicRegisterRequest = {
        gpa: gpa,
        lecturesIds: lectureIds,
        totalEarnedHours: totalEarnedHours,
      };

      console.log('Submission Data:', request);
      this.store.dispatch(academicRegisterActions.register({ request }));
    }
  }

  showDialog() {
    this.visible = true;
  }
}
