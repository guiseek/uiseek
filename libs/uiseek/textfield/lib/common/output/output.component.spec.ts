import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSeekOutputComponent } from './output.component';

describe('UiSeekOutputComponent', () => {
  let component: UiSeekOutputComponent;
  let fixture: ComponentFixture<UiSeekOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiSeekOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSeekOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
