describe('uiseek', () => {
  beforeEach(() => cy.visit('/iframe.html?id=switchcomponent--primary'));

  it('should render the component', () => {
    cy.get('label[uiseek][switch]').should('exist');
  });
});
