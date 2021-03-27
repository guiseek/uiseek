import { Navigation, NavigationItem } from './navigation';
import { Injectable } from '@angular/core';

let NEXT_ID: number = 0;

@Injectable()
export class NavigationService {
  navigations = new Map<string | number, Navigation>();

  register(nav: Navigation | NavigationItem[]) {
    if (nav instanceof Navigation) {
      this.navigations.set(nav.id, nav);
    } else {
      const navigation = new Navigation(NEXT_ID++, nav);
      this.navigations.set(navigation.id, navigation);
    }
  }

  get(id: string | number) {
    return this.navigations.get(id);
  }
}
