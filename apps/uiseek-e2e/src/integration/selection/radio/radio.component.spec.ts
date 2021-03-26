describe('uiseek', () => {
  beforeEach(() => cy.visit('/iframe.html?id=radiocomponent--primary'));

  it('should render the component', () => {
    cy.get('label[uiseek][radio]').should('exist');
  });
});
