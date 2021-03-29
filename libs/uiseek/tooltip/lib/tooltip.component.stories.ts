import { text, number, boolean } from '@storybook/addon-knobs';
import { UiSeekTooltipComponent } from './tooltip.component';

export default {
  title: 'UiSeekTooltipComponent',
};

let ID = 0;

export const primary = () => ({
  moduleMetadata: {
    imports: [],
  },
  component: UiSeekTooltipComponent,
  props: {
    ariaDescribedby: text('aria-describedby', `tooltipId${ID++}`),
    text: text('text', 'Tooltip'),
    position: text('position', ''),
  },
});
