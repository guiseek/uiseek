import { UiSeekCurrencyMaskDirective } from './currency-mask.directive'
import { UiSeekMaskDirective } from './mask.directive'
import { NgModule } from '@angular/core'

@NgModule({
  declarations: [UiSeekMaskDirective, UiSeekCurrencyMaskDirective],
  exports: [UiSeekMaskDirective, UiSeekCurrencyMaskDirective],
})
export class UiSeekMaskModule {}
