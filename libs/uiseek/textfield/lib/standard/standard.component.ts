import { Component, HostBinding } from '@angular/core';
import { UiSeekTextFieldBase } from '../textfield-base';

@Component({
  selector: 'label[uiseek][textfield][standard]',
  templateUrl: './standard.component.html',
})
export class UiSeekTextFieldStandardComponent extends UiSeekTextFieldBase {
  @HostBinding('class.uiseek-textfield-standard')
  uiSeektextFieldStandard = true;
}
