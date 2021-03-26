import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFieldOutlinedComponent } from './outlined.component';

describe('TextFieldOutlinedComponent', () => {
  let component: TextFieldOutlinedComponent;
  let fixture: ComponentFixture<TextFieldOutlinedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextFieldOutlinedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFieldOutlinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
