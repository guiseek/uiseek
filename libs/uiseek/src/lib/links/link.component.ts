import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'a[uiseek][href]',
  template: '<ng-content></ng-content>',
})
export class LinkComponent {
  @HostBinding('class')
  link = 'uiseek-link';
}
