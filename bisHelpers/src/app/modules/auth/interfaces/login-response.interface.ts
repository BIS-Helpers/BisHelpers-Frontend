export interface LoginResponseInterface {
  fullName: string;
  gender: string;
  email: string;
  roles: string[];
  token: string;
  expiresOn: string;
  refreshTokenExpiration: string;
  academicYear?: string;
  academicSemester?: string;
  hasActiveRegistration?: boolean | null;
}
