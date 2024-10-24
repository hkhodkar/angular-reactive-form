import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "ReactiveForm",
    loadComponent: () =>
      import('../features/reactive-form/reactive-form.component')
        .then(m => m.ReactiveFormComponent)
  },
  {
    path: "web-component",
    loadComponent: () =>
      import('../features/custom-rating-component/custom-rating-component.component')
        .then(m => m.CustomRatingComponentComponent)
  },
  {
    path: "custom-accessor-directive",
    loadComponent: () =>
      import('../features/custom-accessor-directive/custom-accessor-directive.component')
        .then(m => m.CustomAccessorDirectiveComponent)
  },
  {
    path: "**",
    redirectTo: "ReactiveForm"
  }
];
