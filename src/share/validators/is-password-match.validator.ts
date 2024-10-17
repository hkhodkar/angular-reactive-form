import { AbstractControl, ValidationErrors } from "@angular/forms";


export function isPasswordMatch(controls: AbstractControl): ValidationErrors | null {
  let password = controls.get('password');
  let confirmPassword = controls.get('confirmPassword');
  let error = { passwordIsNotMatch: true };

  if (password?.value === confirmPassword?.value) return null;

  confirmPassword?.setErrors(error);
  return error;
}
