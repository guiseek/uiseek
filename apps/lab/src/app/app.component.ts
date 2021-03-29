import { Navigation } from './shared/navigation/navigation';
import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
} from '@angular/core';
import { NavigationService } from './shared/navigation';

@Component({
  selector: 'uiseek-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'lab';

  nav: Navigation;

  el: HTMLElement;
  constructor(
    private _navigation: NavigationService,
    readonly elRef: ElementRef<HTMLElement>,
    @Inject(DOCUMENT) readonly doc: Document
  ) {
    this.el = elRef.nativeElement;
    const nav = new Navigation('nav', []);
    this._navigation.register(nav);
    this.nav = nav;
  }

  ngOnInit(): void {
    this.nav.setItems([
      { route: '/', label: 'Home' },
      {
        route: '/showcase',
        label: 'Showcase',
        children: [
          { route: 'button', label: 'Button' },
          { route: 'checbox', label: 'Checkbox' },
        ],
      },
    ]);
    // this.nav.addItem({ route: '/', label: 'Home' });
  }

  ngAfterViewInit(): void {}
}
