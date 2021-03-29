import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'a[uiseek][href]',
  template: '<ng-content></ng-content>',
})
export class UiSeekLinkComponent {
  @HostBinding('class')
  link = 'uiseek-link';
}
