import { ProgressCircularComponent, ProgressLinearComponent } from './progress';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip';
import { NgModule } from '@angular/core';
import { LinkComponent } from './links';
import {
  ButtonTextComponent,
  ButtonOutlinedComponent,
  ButtonContainedComponent,
} from './buttons';
import {
  CheckboxComponent,
  RadioComponent,
  SwitchComponent,
} from './selection';
import {
  TextFieldFilledComponent,
  TextFieldOutlinedComponent,
  TextFieldStandardComponent,
} from './textfields';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonContainedComponent,
    ButtonOutlinedComponent,
    ButtonTextComponent,

    LinkComponent,

    ProgressLinearComponent,
    ProgressCircularComponent,

    TooltipComponent,

    CheckboxComponent,
    RadioComponent,
    SwitchComponent,

    TextFieldFilledComponent,
    TextFieldOutlinedComponent,
    TextFieldStandardComponent,
  ],
  exports: [
    ButtonContainedComponent,
    ButtonOutlinedComponent,
    ButtonTextComponent,

    ProgressLinearComponent,
    ProgressCircularComponent,

    LinkComponent,

    TooltipComponent,

    CheckboxComponent,
    RadioComponent,
    SwitchComponent,

    TextFieldFilledComponent,
    TextFieldOutlinedComponent,
    TextFieldStandardComponent,
  ],
})
export class UiSeekModule {}
