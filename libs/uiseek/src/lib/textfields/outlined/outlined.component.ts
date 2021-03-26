import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'label[uiseek][textfield][outlined]',
  template: '<ng-content select="input,textarea,span"></ng-content>',
})
export class TextFieldOutlinedComponent {
  @HostBinding('class.uiseek-textfield-outlined')
  uiSeektextFieldOutlined = true;
}
