import { Directive, ElementRef, HostListener, inject, Renderer2, Sanitizer, SecurityContext } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

const DEFAULT_REVIEW_TEMPLATE = `
      <h3 data-placeholder="Title...."></h3>
      <p data-placeholder="Describe your experience"></p>
`

@Directive({
  selector: '[formControlName][contentEditable],[formControl][contentEditable],[ngModel][contentEditable]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: EditableContentValueAccessor,
      multi: true
    }
  ]
})
export class EditableContentValueAccessor implements ControlValueAccessor {

  renderer = inject(Renderer2);
  elementRef = inject(ElementRef);
  sanitizer = inject(DomSanitizer);

  onChange!: (newValue: string) => void;
  onTouch!: () => void;

  @HostListener('input', ['$event'])
  onInput(e: Event) {
    this.onChange((e.target as HTMLElement).innerHTML)
  }

  @HostListener('blur')
  onBlur() {
    this.onTouch();
  }

  //it's been called when value set such as set or patch Value
  writeValue(obj: any): void {
    console.log('Method writeValue has been called', obj);
    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'innerHTML',
      this.sanitizer.sanitize(SecurityContext.HTML, obj) || DEFAULT_REVIEW_TEMPLATE
    )
  }

  registerOnChange(fn: any): void {
    console.log('Method registerOnChange has been called', fn);
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    console.log('Method registerOnChange has been called', fn);
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    console.log('Method registerOnChange has been called', isDisabled);
    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'contentEditable',
      !isDisabled
    )
  }

}
