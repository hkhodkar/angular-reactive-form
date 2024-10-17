import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


const upperCasePatternError = { upperCasePatternError: true };
const loweCasePatternError = { lowerCasePatternError: true };
const symbolPatternError = { symbolPatternError: true };

export function passwordPattern(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const { value } = control;
    const upperCasePattern = new RegExp("(?=.*[A-Z])");
    const lowerCasePattern = new RegExp("(?=.*[a-z])");
    const symbolPattern = new RegExp("(?=.*[)!@#$%^&*(])")
    if (!upperCasePattern.test(value)) {
      control.setErrors(upperCasePatternError);
      return upperCasePatternError;
    }

    if (!lowerCasePattern.test(value)) {
      control.setErrors(loweCasePatternError)
      return loweCasePatternError;
    }

    if (!symbolPattern.test(value)) {
      control.setErrors(symbolPatternError);
      return symbolPatternError;
    }

    return null;
  }
}
