import { AbstractControl, ValidationErrors } from "@angular/forms";

export function isPasswordMatch(controls: AbstractControl): ValidationErrors | null {
  const password = controls?.get('password');
  const confirmPassword = controls?.get('confirmPassword');
  if (password?.value === confirmPassword?.value) return null;
  const errors = { passwordIsNotMatch: true }
  confirmPassword?.setErrors(errors);
  return errors;
}
