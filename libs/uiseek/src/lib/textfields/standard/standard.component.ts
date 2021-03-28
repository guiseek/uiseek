import { Component, HostBinding } from '@angular/core';
import { TextFieldBase } from '../textfield-base';

@Component({
  selector: 'label[uiseek][textfield][standard]',
  templateUrl: './standard.component.html',
})
export class TextFieldStandardComponent extends TextFieldBase {
  @HostBinding('class.uiseek-textfield-standard')
  uiSeektextFieldStandard = true;
}
