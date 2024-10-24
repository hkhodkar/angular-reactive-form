import { environment } from "../../environments/environment";
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


const upperCasePatternError = { upperCasePatternError: true };
const loweCasePatternError = { lowerCasePatternError: true };
const symbolPatternError = { symbolPatternError: true };
const minLengthError = { minimumLength: { minLength: environment.passwordMinLength } }
const maxLengthError = { maximumLength: { maxLength: environment.passwordMaxLength } }


export function passwordPattern(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const { value } = control;
    const upperCasePattern = new RegExp(environment.upperCasePattern);
    const lowerCasePattern = new RegExp(environment.lowerCasePattern);
    const symbolPattern = new RegExp(environment.symbolPattern);
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

    if (value.length <= 8) {
      control.setErrors(minLengthError);
      return minLengthError;
    }

    if (value.length >= 30) {
      control.setErrors(maxLengthError);
      return maxLengthError;
    }

    return null;
  }
}
