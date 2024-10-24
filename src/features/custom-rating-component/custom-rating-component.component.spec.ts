import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRatingComponentComponent } from './custom-rating-component.component';

describe('CustomRatingComponentComponent', () => {
  let component: CustomRatingComponentComponent;
  let fixture: ComponentFixture<CustomRatingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomRatingComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomRatingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
