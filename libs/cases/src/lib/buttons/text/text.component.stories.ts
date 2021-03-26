import { text, select, number, boolean } from '@storybook/addon-knobs';
import { ButtonTextComponent } from './text.component';

export default {
  title: 'ButtonTextComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: ButtonTextComponent,
  props: {
    state: text('text', 'Tooltip'),
    disabled: select('disabled', {
      'Desabilitado': true,
      'Habilitado': false
    }, false)
  }
})
