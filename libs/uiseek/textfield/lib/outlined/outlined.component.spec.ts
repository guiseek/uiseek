import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSeekTextFieldOutlinedComponent } from './outlined.component';

describe('UiSeekTextFieldOutlinedComponent', () => {
  let component: UiSeekTextFieldOutlinedComponent;
  let fixture: ComponentFixture<UiSeekTextFieldOutlinedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiSeekTextFieldOutlinedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSeekTextFieldOutlinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
