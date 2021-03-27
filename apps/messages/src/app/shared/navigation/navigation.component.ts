import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavigationService } from './navigation.service';
import { Navigation, NavigationItem } from './navigation';

@Component({
  selector: 'uiseek-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  readonly nav: Navigation;
  constructor(readonly navigation: NavigationService) {
    this.nav = this.navigation.get('nav');
  }

  toggle(item: NavigationItem) {
    item.expanded = !item.expanded;
  }
}
