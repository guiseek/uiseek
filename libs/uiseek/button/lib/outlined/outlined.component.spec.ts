import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSeekButtonOutlinedComponent } from './outlined.component';

describe('UiSeekButtonOutlinedComponent', () => {
  let component: UiSeekButtonOutlinedComponent;
  let fixture: ComponentFixture<UiSeekButtonOutlinedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiSeekButtonOutlinedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSeekButtonOutlinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
