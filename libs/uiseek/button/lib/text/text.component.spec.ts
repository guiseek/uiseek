import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSeekButtonTextComponent } from './text.component';

describe('UiSeekButtonTextComponent', () => {
  let component: UiSeekButtonTextComponent;
  let fixture: ComponentFixture<UiSeekButtonTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiSeekButtonTextComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSeekButtonTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
