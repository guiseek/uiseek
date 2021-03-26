describe('uiseek', () => {
  beforeEach(() => cy.visit('/iframe.html?id=tooltipcomponent--primary&knob-aria-describedby&knob-text=Tooltip&knob-position'));

  it('should render the component', () => {
    cy.get(':not(html)[uiseek][tooltip]').should('exist');
  });
});
