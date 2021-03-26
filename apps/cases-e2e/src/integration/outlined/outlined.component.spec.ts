describe('cases', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttonoutlinedcomponent--primary'));

  it('should render the component', () => {
    cy.get('uiseek-outlined').should('exist');
  });
});
