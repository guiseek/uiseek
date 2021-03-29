import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSeekRadioComponent } from './radio.component';

describe('UiSeekRadioComponent', () => {
  let component: UiSeekRadioComponent;
  let fixture: ComponentFixture<UiSeekRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiSeekRadioComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSeekRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
