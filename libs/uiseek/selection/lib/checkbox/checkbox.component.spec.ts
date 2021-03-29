import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSeekCheckboxComponent } from './checkbox.component';

describe('UiSeekCheckboxComponent', () => {
  let component: UiSeekCheckboxComponent;
  let fixture: ComponentFixture<UiSeekCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiSeekCheckboxComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSeekCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
