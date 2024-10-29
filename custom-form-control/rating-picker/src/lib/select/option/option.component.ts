import { Component, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-option',
  templateUrl: './option.component.html',
  styleUrl: './option.component.scss'
})
export class OptionComponent<T> {


  @HostBinding('class.selected')
  protected isSelected = false;

  @Input()
  value: T | null = null;

  @Input()
  @HostBinding('class.disabled')
  disabled = false;

  @Output()
  selected = new EventEmitter<OptionComponent<T>>();

  @HostListener('click')
  select() {
    if (!this.disabled) {
      this.highLightAsSelected();
      this.selected.emit(this);
    }
  }

  deselect() {
    this.isSelected = false;
  }

  highLightAsSelected() {
    this.isSelected = true;
  }

}
