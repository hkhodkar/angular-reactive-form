import { SharedModule } from '../../share/modules/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { EditableContentValueAccessor } from '../../share/directives/editable-content.directive';

@Component({
  selector: 'app-custom-accessor-directive',
  standalone: true,
  imports: [SharedModule, EditableContentValueAccessor],
  templateUrl: './custom-accessor-directive.component.html',
  styleUrl: './custom-accessor-directive.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomAccessorDirectiveComponent implements OnInit {

  constructor() {

  }

  fb = inject(FormBuilder);

  form!: FormGroup

  ngOnInit(): void {
    this.form = this.fb.group({
      reviewText: [null, Validators.required]
    })
  }

  onSubmit() {
    console.log(this.form.value)
  }

}
