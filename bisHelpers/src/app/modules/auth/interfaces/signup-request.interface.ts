export interface SignupRequestInterface {
  fullName: string;
  email: string;
  phoneNumber: string;
  collegeId: string;
  password: string;
  dateOfJoin: Date;
  birthDate: string;
  gender: string;
}

export interface Gender {
  type: 'Male' | 'Female';
}
