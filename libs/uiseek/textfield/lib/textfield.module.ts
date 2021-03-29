import { NgModule } from '@angular/core';
import { UiSeekTextFieldFilledComponent } from './filled/filled.component';
import { UiSeekTextFieldOutlinedComponent } from './outlined/outlined.component';
import { UiSeekTextFieldStandardComponent } from './standard/standard.component';
import {
  UiSeekHelperComponent,
  UiSeekInputComponent,
  UiSeekOutputComponent,
} from './common';

@NgModule({
  declarations: [
    UiSeekTextFieldFilledComponent,
    UiSeekTextFieldOutlinedComponent,
    UiSeekTextFieldStandardComponent,
    UiSeekInputComponent,
    UiSeekOutputComponent,
    UiSeekHelperComponent,
  ],
  exports: [
    UiSeekTextFieldFilledComponent,
    UiSeekTextFieldOutlinedComponent,
    UiSeekTextFieldStandardComponent,
    UiSeekInputComponent,
    UiSeekOutputComponent,
    UiSeekHelperComponent,
  ],
})
export class UiSeekTextFieldModule {}
