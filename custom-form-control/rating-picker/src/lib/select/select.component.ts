import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';
import { AfterContentInit, Component, ContentChildren, EventEmitter, HostListener, Input, OnDestroy, Output, QueryList } from '@angular/core';
import { OptionComponent } from './option/option.component';
import { SelectionModel } from '@angular/cdk/collections';
import { merge, startWith, Subject, switchMap, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'lib-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent<T> implements AfterContentInit, OnDestroy {

  @Input()
  label = '';

  isOpen = false;


  @Input()
  get value() {
    return this.selectionModel.selected[0] || null;
  }
  set value(value: T | null) {
    this.selectionModel.clear();
    if (value) {
      this.selectionModel.select(value)
    }
  }
  private selectionModel = new SelectionModel<T>();

  private unsubscribe$ = new Subject<void>();

  @Output()
  readonly selectionChanged = new EventEmitter<T | null>();

  @HostListener('click')
  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }


  @ContentChildren(OptionComponent, { descendants: true })
  options!: QueryList<OptionComponent<T>>

  ngAfterContentInit(): void {
    this.highLightedSelectedOptions(this.value);
    this.selectionModel.changed
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(values => {
        values.removed.forEach(item => this.findOptionsByValue(item)?.deselect());
        values.added.forEach(item => this.findOptionsByValue(item)?.highLightAsSelected());
      })
    this.options.changes.pipe(
      startWith<QueryList<OptionComponent<T>>>(this.options),
      switchMap(options => merge(...options.map(o => o.selected))),
      takeUntil(this.unsubscribe$)
    ).subscribe(selectedOption => this.handleSelection(selectedOption))
  }

  private handleSelection(selectedOption: OptionComponent<T>) {
    selectedOption.value && this.selectionModel.toggle(selectedOption.value);
    this.selectionChanged.emit(this.value);
    this.close();
  }

  private highLightedSelectedOptions(value: T | null) {
    this.findOptionsByValue(value)?.highLightAsSelected();
  }

  private findOptionsByValue(value: T | null) {
    return this.options && this.options.find(option => option.value === value);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
