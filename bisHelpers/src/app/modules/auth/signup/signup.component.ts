import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit{
  signupForm: FormGroup =new FormGroup ({});
  
  date1: Date | undefined;
  date2: Date | undefined;
  
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.fb.nonNullable.group({
      name:['',[Validators.required],Validators.minLength(4)],
      phone: ['', [Validators.required], Validators.pattern('^[0-9]*$')],
      email: ['', [Validators.required]],
      collageid: ['', [Validators.required],Validators.minLength(9)],
      password: ['', [Validators.required],Validators.minLength(8)],
      confirmPassword: ['', [Validators.required], Validators.minLength(8)],
      joinDate: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      gender: ['', [Validators.required]]
    });
  }
  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value 
      ? null : { 'mismatch': true };
  }
  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
    } else {
      console.log('Form is not valid');
    }
  }
 }
