import { FormControl } from "@angular/forms";

export type FormType = {
  name: FormControl<string | null>
  password: FormControl<string | null>;
  confirmPassword: FormControl<string | null>;
}
