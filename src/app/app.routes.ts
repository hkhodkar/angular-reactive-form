import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "ReactiveForm",
    loadComponent: () =>
      import('../features/reactive-form/reactive-form.component')
        .then(c => c.ReactiveFormComponent)
  },
  {
    path: "web-component",
    loadComponent: () =>
      import('../features/custom-rating-component/custom-rating-component.component')
        .then(c => c.CustomRatingComponentComponent)
  },
  {
    path: "custom-accessor-directive",
    loadComponent: () =>
      import('../features/custom-accessor-directive/custom-accessor-directive.component')
        .then(c => c.CustomAccessorDirectiveComponent)
  },
  {
    path: "custom-select",
    loadComponent: () =>
      import('../features/custom-select/custom-select.component')
        .then(c => c.CustomSelectComponent)
  },
  {
    path: "**",
    redirectTo: "ReactiveForm"
  }
];
