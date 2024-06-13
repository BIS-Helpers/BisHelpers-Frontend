import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { GpaReport } from '../../interfaces/gpa-report';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit, OnChanges {
  @Input() gpaReport: GpaReport = {} as GpaReport;
  @Input() stimulatedGPA: number = 2.77;

  GPA_MIN: number = 0;
  GPA: number = 0;
  labels!: string[];

  data: any;
  options: any;

  constructor(private localStorageService: LocalStorageService) {
    Chart.register(ChartDataLabels  );
  }

  ngOnInit() {
    this.labels = this.localStorageService.getItem('academicYearAndSemester');
    this.GPA = this.gpaReport.gpa;
    this.GPA_MIN = this.gpaReport.gpaBasedOnMinGrade;

    this.initializeChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['stimulatedGPA'] && !changes['stimulatedGPA'].isFirstChange()) {
      this.initializeChart();
    }
    console.log(this.stimulatedGPA);
  }

  initializeChart() {
    this.data = {
      labels: this.labels,
      datasets: [
        {
          label: 'Current GPA',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235)',
          data: [this.GPA],
          borderWidth: 1,
        },
        {
          label: 'Minimum to save GPA',
          backgroundColor: 'rgba(255, 205, 86, 0.2)',
          borderColor: 'rgba(255, 205, 86)',
          data: [this.GPA_MIN],
          borderWidth: 1,
        },
        {
          label: 'Stimulation GPA',
          backgroundColor:
            this.stimulatedGPA >= this.GPA
              ? 'rgba(75, 192, 192, 0.2)'
              : 'rgba(255, 99, 132, 0.2)',
          borderColor:
            this.stimulatedGPA >= this.GPA
              ? 'rgb(75, 192, 192)'
              : 'rgb(255, 99, 132)',
          data: [this.stimulatedGPA],
          borderWidth: 1,
        },
      ],
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {},
        },
        datalabels: {
          anchor: 'end',
          align: 'end',
          color: 'blue',
          font: {
            weight: 'bold',
          },
          formatter: (val: number) =>
            `${val !== undefined ? val.toFixed(2) : 'N/A'}`, // Format the value
        },
      },
      scales: {
        x: {
          ticks: {
            font: {
              weight: 500,
            },
          },
          grid: {
            drawBorder: false,
          },
        },
        y: {
          beginAtZero: false,
          grace: '2%',
          ticks: {},
          grid: {
            drawBorder: false,
          },
        },
      },
    };
  }
}
