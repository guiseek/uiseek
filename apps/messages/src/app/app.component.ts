import { NavigationService } from './shared/navigation/navigation.service';
import { Component, OnInit } from '@angular/core';
import { Navigation, NavigationItem } from './shared/navigation/navigation';

@Component({
  selector: 'uiseek-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'messages';
  nav: Navigation;
  constructor(private _navigation: NavigationService) {
    const nav = new Navigation('nav', []);
    const items: NavigationItem[] = [{ route: '/', label: 'Home' }];
    nav.addItem(items[0]);
    this._navigation.register(nav);
    this.nav = nav;
  }

  ngOnInit(): void {
    window.setTimeout(() => {
      this.nav.addItem({
        route: '/',
        label: 'Home',
        children: [{ route: '/', label: 'Home' }],
      });
    }, 4000);
  }
}
