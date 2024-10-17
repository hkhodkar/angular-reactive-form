import { FormType } from './form.type';
import { bannedWords } from '../../share/validators/ban-words';
import { SharedModule } from '../../share/modules/shared.module';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { passwordPattern } from '../../share/validators/password-pattern.validator';
import { isPasswordMatch } from '../../share/validators/is-password-match.validator';
import { UniqueNameValidation } from '../../share/services/unique-name-validator.service';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ReactiveFormComponent {
  uniqueNameValidator = inject(UniqueNameValidation);

  form: FormGroup<FormType> = new FormGroup({
    name: new FormControl<string>('', {
      validators: Validators
        .compose([Validators.required, Validators.minLength(4), Validators.maxLength(20), bannedWords(["test", "dummy"])]),
      asyncValidators: this.uniqueNameValidator.validate.bind(this.uniqueNameValidator),
      updateOn: "blur"
    }),
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
