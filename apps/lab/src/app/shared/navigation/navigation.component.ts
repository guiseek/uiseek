import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { NavigationService } from './navigation.service';
import { Navigation, NavigationItem } from './navigation';

@Component({
  selector: 'nav[uiseek]',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  @HostBinding('role')
  role = 'navigation'

  readonly nav: Navigation;
  constructor(readonly navigation: NavigationService) {
    this.nav = this.navigation.get('nav');
  }

  toggle(item: NavigationItem) {
    item.expanded = !item.expanded;
  }
}
