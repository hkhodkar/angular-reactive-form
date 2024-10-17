import { AbstractControl, ValidationErrors } from "@angular/forms";


export function isPasswordMatch(controls: AbstractControl): ValidationErrors | null {
  const password = controls.get('password');
  const confirmPassword = controls.get('confirmPassword');
  const error = { matchedPassword: true };
  if (password?.value === confirmPassword?.value) return null;
  confirmPassword?.setErrors(error);
  return error;
}

export type order = { type: string, duration: number, quantity: number }


export function test(order: order[]) {
  let max = order.sort((a, b) => a.duration - b.duration).at(-1)?.duration || 0;
  // for (const element of order) {
  //   max = element.duration > max ? element.duration : max;
  // }
  console.log(max)
  return max;
}
