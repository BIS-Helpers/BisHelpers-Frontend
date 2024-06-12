export interface Professor {
  academicLectures: lectures[];
  fullName: string;
  id: number;
}

export interface lectures {
  day: string;
  groupNumber: string;
  id: number;
  startTime: string;
}
