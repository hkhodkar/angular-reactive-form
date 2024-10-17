import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

const upperCaseError = { upperCaseError: true };
const lowerCaseError = { lowerCaseError: true };
const symbolError = { symbolError: true };

export function checkPasswordPattern(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const upperCasePattern = new RegExp("(?=.*[A-Z])");
    // const lowerCasePattern = new RegExp(/"(?.=*[a-z])"/);
    // const symbolPattern = new RegExp("/(?.=*[!@#$%^&*)(])/")
    const { value } = control;
    if (!upperCasePattern.test(control.value)) {
      control.setErrors(upperCaseError);
      return upperCaseError;
    }
    // if (!lowerCasePattern.test(control.value)) {
    //   control.setErrors(lowerCaseError);
    //   return lowerCaseError;
    // }
    // if (!symbolPattern.test(value)) {
    //   control.setErrors(symbolError);
    //   return symbolError;
    // }
    return null;
  }
}
