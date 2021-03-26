import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressLinearComponent } from './linear.component';

describe('ProgressLinearComponent', () => {
  let component: ProgressLinearComponent;
  let fixture: ComponentFixture<ProgressLinearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgressLinearComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressLinearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
