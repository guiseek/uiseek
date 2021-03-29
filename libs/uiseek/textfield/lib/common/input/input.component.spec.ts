import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSeekInputComponent } from './input.component';

describe('UiSeekInputComponent', () => {
  let component: UiSeekInputComponent;
  let fixture: ComponentFixture<UiSeekInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiSeekInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSeekInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
