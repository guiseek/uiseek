import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSeekProgressLinearComponent } from './linear.component';

describe('UiSeekProgressLinearComponent', () => {
  let component: UiSeekProgressLinearComponent;
  let fixture: ComponentFixture<UiSeekProgressLinearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiSeekProgressLinearComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSeekProgressLinearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
