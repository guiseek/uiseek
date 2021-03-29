import { Navigation } from './shared/navigation/navigation';
import { SharedModule } from './shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ColorsComponent } from './colors/colors.component';
import { NavigationService } from './shared/navigation';

describe('AppComponent', () => {
  let nav: Navigation
  let service: NavigationService;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeAll(() => {
    nav = new Navigation('nav', [])
  })

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, ColorsComponent],
      imports: [
        SharedModule,
        RouterTestingModule
      ],
    }).compileComponents();
    service = TestBed.inject(NavigationService);
    service.register(nav)

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
