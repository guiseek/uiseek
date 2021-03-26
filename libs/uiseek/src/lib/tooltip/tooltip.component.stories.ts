import { text, number, boolean } from '@storybook/addon-knobs';
import { TooltipComponent } from './tooltip.component';

export default {
  title: 'TooltipComponent'
}

let ID = 0

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: TooltipComponent,
  props: {
    ariaDescribedby: text('aria-describedby', `tooltipId${ID++}`),
    text: text('text', 'Tooltip'),
    position: text('position', ''),
  }
})
