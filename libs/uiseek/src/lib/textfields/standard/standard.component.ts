import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'label[uiseek][textfield][standard]',
  template: '<ng-content select="input,textarea,span"></ng-content>',
})
export class TextFieldStandardComponent {
  @HostBinding('class.uiseek-textfield-standard')
  uiSeektextFieldStandard = true;
}
