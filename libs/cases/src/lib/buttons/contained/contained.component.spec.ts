import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonContainedComponent } from './contained.component';

describe('ButtonContainedComponent', () => {
  let component: ButtonContainedComponent;
  let fixture: ComponentFixture<ButtonContainedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonContainedComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonContainedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
