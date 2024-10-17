import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


export interface IForm {
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
    password: new FormControl<string>('', Validators.compose([Validators.required])),
    confirmPassword: new FormControl<string>('', Validators.required)
  },);

  get passwordControl(): FormControl {
    return this.form.controls.password;
  }

  get confirmPasswordControl(): FormControl {
    return this.form.controls.confirmPassword;
  }

}
