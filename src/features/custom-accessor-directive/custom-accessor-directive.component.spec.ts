import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAccessorDirectiveComponent } from './custom-accessor-directive.component';

describe('ValueAccessorDirectiveComponent', () => {
  let component: CustomAccessorDirectiveComponent;
  let fixture: ComponentFixture<CustomAccessorDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomAccessorDirectiveComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CustomAccessorDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
