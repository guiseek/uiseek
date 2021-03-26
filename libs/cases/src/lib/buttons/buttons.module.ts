import { UiSeekModule } from '@uiseek/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonContainedComponent } from './contained/contained.component';
import { ButtonOutlinedComponent } from './outlined/outlined.component';
import { ButtonTextComponent } from './text/text.component';

@NgModule({
  declarations: [
    ButtonContainedComponent,
    ButtonOutlinedComponent,
    ButtonTextComponent,
  ],
  imports: [CommonModule, UiSeekModule],
})
export class ButtonsModule {}
