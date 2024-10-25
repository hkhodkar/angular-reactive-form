import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, HostListener, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


export type RatingOptions = 'great' | 'good' | 'neutral' | 'bad' | null;

@Component({
  selector: 'lib-rating-picker',
  standalone: true,
  imports: [NgClass],
  templateUrl: './rating-picker.component.html',
  styleUrl: './rating-picker.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RatingPickerComponent,
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingPickerComponent implements OnChanges, ControlValueAccessor {

  cdr = inject(ChangeDetectorRef);

  @Input()
  value: RatingOptions = null;

  @Input()
  disabled = false;

  @Output()
  changed = new EventEmitter<RatingOptions>();

  @Input()
  @HostBinding('attr.tabIndex')
  tabIndex = 0;

  @HostListener('blur')
  onBlur() {
    this.onTouched()
  }



  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']) {
      this.onChange(changes['value'].currentValue);
    }
  }

  onChange: (obj: RatingOptions) => void = () => { };

  onTouched!: () => void;

  writeValue(obj: RatingOptions): void {
    this.value = obj;
    this.cdr.markForCheck();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
  }

  setValue(value: RatingOptions) {
    if (!this.disabled) {
      this.value = value;
      this.onChange(value);
      this.onTouched();
      this.changed.emit(value);
    }

  }

}
