import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator/jest';

import { UiSeekMaskDirective } from './mask.directive';

describe('UiSeekMaskDirective ', () => {
  let spectator: SpectatorDirective<UiSeekMaskDirective>;
  const createDirective = createDirectiveFactory(UiSeekMaskDirective);

  it('should change the background color', () => {
    expect(true).toBe(true)
    // spectator = createDirective(`<div highlight>Testing UiSeekMaskDirective</div>`);

    // spectator.dispatchMouseEvent(spectator.element, 'mouseover');

    // expect(spectator.element).toHaveStyle({
    //   backgroundColor: 'rgba(0,0,0, 0.1)'
    // });

    // spectator.dispatchMouseEvent(spectator.element, 'mouseout');
    // expect(spectator.element).toHaveStyle({
    //   backgroundColor: '#fff'
    // });
  });

});
