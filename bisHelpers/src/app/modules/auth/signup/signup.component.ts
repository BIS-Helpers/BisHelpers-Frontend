import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

interface types {
  name: string;
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
  gender: types[] | undefined;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.fb.nonNullable.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      collageid: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      joinDate: ['', Validators.required],
      birthDate: ['', Validators.required],
      gender: ['', Validators.required]
    });

    this.gender = [
            { name: 'Male'},
            { name: 'Female' },
        ];

}
}
