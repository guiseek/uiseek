import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainedComponent } from './contained.component';

describe('ContainedComponent', () => {
  let component: ContainedComponent;
  let fixture: ComponentFixture<ContainedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
