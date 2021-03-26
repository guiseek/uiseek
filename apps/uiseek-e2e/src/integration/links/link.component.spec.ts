describe('uiseek', () => {
  beforeEach(() => cy.visit('/iframe.html?id=linkcomponent--primary'));

  it('should render the component', () => {
    cy.get('a[uiseek][href]').should('exist');
  });
});
