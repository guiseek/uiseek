import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSeekProgressCircularComponent } from './circular.component';

describe('UiSeekProgressCircularComponent', () => {
  let component: UiSeekProgressCircularComponent;
  let fixture: ComponentFixture<UiSeekProgressCircularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiSeekProgressCircularComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSeekProgressCircularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
