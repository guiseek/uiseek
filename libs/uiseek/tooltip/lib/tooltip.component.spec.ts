import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSeekTooltipComponent } from './tooltip.component';

describe('UiSeekTooltipComponent', () => {
  let component: UiSeekTooltipComponent;
  let fixture: ComponentFixture<UiSeekTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiSeekTooltipComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSeekTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
