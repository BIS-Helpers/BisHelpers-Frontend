import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

interface gender {
  type: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({});

  datejoin: Date | undefined;
  datebirth: Date | undefined;
  gender: gender[] | undefined;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.gender = [{ type: 'Male' }, { type: 'Female' }];
    this.signupForm = this.fb.nonNullable.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      collageid: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      joinDate: ['', Validators.required],
      birthDate: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  onSubmit() {
    this.updateControlDate();
    console.log(this.signupForm.value);
  }

  updateControlDate() {
    if (
      this.signupForm.get('birthDate')?.value &&
      this.signupForm.get('joinDate')?.value
    ) {
      let birthDate = this.signupForm.get('birthDate')?.value;
      let joinDate = this.signupForm.get('joinDate')?.value;

      birthDate = this.formateDate(birthDate);
      joinDate = this.formateDate(joinDate);

      this.signupForm.patchValue({ birthDate });
      this.signupForm.patchValue({ joinDate });
    }
  }

  formateDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const formatedDate = [year, month, day].join('-');
    return formatedDate;
  }
}
