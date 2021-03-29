import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSeekTextFieldStandardComponent } from './standard.component';

describe('UiSeekTextFieldStandardComponent', () => {
  let component: UiSeekTextFieldStandardComponent;
  let fixture: ComponentFixture<UiSeekTextFieldStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiSeekTextFieldStandardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSeekTextFieldStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
