import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'label[uiseek][switch]',
  template: '<ng-content select="input,span"></ng-content>',
})
export class UiSeekSwitchComponent {
  @HostBinding('class.uiseek-switch')
  uiseekCheckbox = true;
}
