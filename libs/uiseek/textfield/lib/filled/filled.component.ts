import { UiSeekTextFieldBase } from '../textfield-base';
import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'label[uiseek][textfield][filled]',
  template: '<ng-content select="input,textarea,span"></ng-content>',
})
export class UiSeekTextFieldFilledComponent extends UiSeekTextFieldBase {
  @HostBinding('class.uiseek-textfield-filled')
  uiSeektextFieldFilled = true;
}
