import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { isPasswordMatch } from '../share/validators/is-password-match.validator';
import { passwordPattern } from '../share/validators/password-pattern.validator';


export interface IForm {
  name: FormControl<string | null>
  password: FormControl<string | null>;
  confirmPassword: FormControl<string | null>;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
  title = 'form';

  form: FormGroup<IForm> = new FormGroup({
    name: new FormControl<string>('', Validators
      .compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)])),
    password: new FormControl<string>('', Validators.compose([Validators.required, passwordPattern()])),
    confirmPassword: new FormControl<string>('', Validators.required)
  }, isPasswordMatch);

  get passwordControl(): FormControl {
    return this.form.controls.password;
  }

  get confirmPasswordControl(): FormControl {
    return this.form.controls.confirmPassword;
  }

}
