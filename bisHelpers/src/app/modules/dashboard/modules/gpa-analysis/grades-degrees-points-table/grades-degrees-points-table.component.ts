import { Component, OnInit } from '@angular/core';

interface GradeColumn {
  field: keyof Grade;
  header: string;
}

interface CategoryColumn {
  field: keyof Category;
  header: string;
}

interface Grade {
  grade: string;
  degrees: string;
  points: number;
}

interface Category {
  rating: string;
  points: string;
}

@Component({
  selector: 'app-grades-degrees-points-table',
  templateUrl: './grades-degrees-points-table.component.html',
  styleUrls: ['./grades-degrees-points-table.component.css'],
})
export class GradesDegreesPointsTableComponent implements OnInit {
  gradeCols!: GradeColumn[];
  grades!: Grade[];
  categoryCols!: CategoryColumn[];
  categories!: Category[];

  ngOnInit() {
    this.gradeCols = [
      { field: 'grade', header: 'Grade' },
      { field: 'degrees', header: 'Degrees' },
      { field: 'points', header: 'Points' },
    ];

    this.grades = [
      { grade: 'A+', degrees: '90 - 100', points: 4 },
      { grade: 'A', degrees: '85 - 90', points: 3.75 },
      { grade: 'B+', degrees: '80 - 85', points: 3.4 },
      { grade: 'B', degrees: '75 - 80', points: 3.1 },
      { grade: 'C+', degrees: '70 - 75', points: 2.8 },
      { grade: 'C', degrees: '65 - 70', points: 2.5 },
      { grade: 'D+', degrees: '60 - 65', points: 2.25 },
      { grade: 'D', degrees: '50 - 60', points: 2 },
      { grade: 'F', degrees: 'Less than 50', points: 0 },
    ];

    this.categoryCols = [
      { field: 'rating', header: 'Rating' },
      { field: 'points', header: 'Points' },
    ];

    this.categories = [
      { rating: 'Excellent', points: 'more than 3.4' },
      { rating: 'Very Good', points: '2.8' },
      { rating: 'Good', points: '2.4' },
      { rating: 'Accepted', points: '2' },
      { rating: 'Poor', points: '1.4' },
      { rating: 'Very Poor', points: 'less than 1.4' },
    ];
  }
}
