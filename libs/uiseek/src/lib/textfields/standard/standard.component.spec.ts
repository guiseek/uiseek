import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFieldStandardComponent } from './standard.component';

describe('TextFieldStandardComponent', () => {
  let component: TextFieldStandardComponent;
  let fixture: ComponentFixture<TextFieldStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextFieldStandardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFieldStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
