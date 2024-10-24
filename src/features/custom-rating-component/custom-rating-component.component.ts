import '@polymer/paper-input/paper-textarea';
import { SharedModule } from '../../share/modules/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-rating-component',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './custom-rating-component.component.html',
  styleUrl: './custom-rating-component.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomRatingComponentComponent implements OnInit {

  fb = inject(FormBuilder);
  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      review: [null, Validators.required]
    })
  }

  onSubmit() {
    console.log(this.form.value)
  }
}
