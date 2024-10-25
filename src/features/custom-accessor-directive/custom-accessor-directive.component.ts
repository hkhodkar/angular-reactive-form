import { SharedModule } from '../../share/modules/shared.module';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { EditableContentValueAccessor } from '../../share/directives/editable-content.directive';
import { RatingPickerComponent } from '../../../custom-form-control/rating-picker/src/public-api';
import { RatingFormType } from './custom-accessor-directive.type';


@Component({
  selector: 'app-custom-accessor-directive',
  standalone: true,
  imports: [SharedModule, EditableContentValueAccessor, RatingPickerComponent],
  templateUrl: './custom-accessor-directive.component.html',
  styleUrl: './custom-accessor-directive.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomAccessorDirectiveComponent implements OnInit {

  fb = inject(FormBuilder);
  form!: FormGroup<RatingFormType>;

  ngOnInit(): void {
    this.form = this.fb.group<RatingFormType>({
      reviewText: new FormControl('', Validators.required),
      reviewRating: new FormControl('bad')
    })
  }

  onSubmit() {
    console.log(this.form.value)
  }

}
