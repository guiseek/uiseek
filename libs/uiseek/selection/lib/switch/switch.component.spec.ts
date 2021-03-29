import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSeekSwitchComponent } from './switch.component';

describe('UiSeekSwitchComponent', () => {
  let component: UiSeekSwitchComponent;
  let fixture: ComponentFixture<UiSeekSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiSeekSwitchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSeekSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
