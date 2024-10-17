import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { catchError, map, Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UniqueNameValidation implements AsyncValidator {

  httpClient = inject(HttpClient);

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    let { value: username } = control;
    return this.httpClient.
      get<unknown[]>(`https://jsonplaceholder.typicode.com/users?username=${username}`)
      .pipe(
        map(users => users.length === 0 ? null : { uniqueName: { isTaken: true } }),
        catchError(() => of({ uniqueName: { unknown: true } }))
      )
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error("Method not implemented.");
  }
}
