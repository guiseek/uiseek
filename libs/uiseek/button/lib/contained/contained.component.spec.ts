import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSeekButtonContainedComponent } from './contained.component';

describe('UiSeekButtonContainedComponent', () => {
  let component: UiSeekButtonContainedComponent;
  let fixture: ComponentFixture<UiSeekButtonContainedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiSeekButtonContainedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSeekButtonContainedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
