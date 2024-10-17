import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function bannedWords(bannedWords: string[] | null): ValidatorFn {
  return (control: AbstractControl<string | null>): ValidationErrors | null => {
    const { value } = control;
    const foundedWord = bannedWords?.find(word => word.toLocaleLowerCase() === value?.toLocaleLowerCase())
    return foundedWord ? { bannedWords: { bannedWord: foundedWord } } : null
  }
}
