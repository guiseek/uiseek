import { UiSeekButtonContainedComponent } from './contained/contained.component';
import { UiSeekButtonOutlinedComponent } from './outlined/outlined.component';
import { UiSeekButtonTextComponent } from './text/text.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UiSeekButtonTextComponent,
    UiSeekButtonOutlinedComponent,
    UiSeekButtonContainedComponent,
  ],
  exports: [
    UiSeekButtonTextComponent,
    UiSeekButtonOutlinedComponent,
    UiSeekButtonContainedComponent,
  ],
})
export class UiSeekButtonModule {}
