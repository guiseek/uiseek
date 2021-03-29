import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSeekHelperComponent } from './helper.component';

describe('UiSeekHelperComponent', () => {
  let component: UiSeekHelperComponent;
  let fixture: ComponentFixture<UiSeekHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiSeekHelperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSeekHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
