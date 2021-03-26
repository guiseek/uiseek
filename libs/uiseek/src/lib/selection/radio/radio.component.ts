import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'label[uiseek][radio]',
  template: '<ng-content select="input,span"></ng-content>',
})
export class RadioComponent {
  @HostBinding('class.uiseek-radio')
  uiseekCheckbox = true
}
