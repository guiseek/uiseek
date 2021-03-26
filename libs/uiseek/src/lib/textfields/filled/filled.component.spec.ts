import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFieldFilledComponent } from './filled.component';

describe('TextFieldFilledComponent', () => {
  let component: TextFieldFilledComponent;
  let fixture: ComponentFixture<TextFieldFilledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextFieldFilledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFieldFilledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
