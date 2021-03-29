import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'label[uiseek][checkbox]',
  template: '<ng-content select="input,span"></ng-content>',
})
export class UiSeekCheckboxComponent {
  @HostBinding('class.uiseek-checkbox')
  uiseekCheckbox = true;
}
