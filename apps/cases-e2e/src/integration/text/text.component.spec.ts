describe('cases', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttontextcomponent--primary'));

  it('should render the component', () => {
    cy.get('uiseek-text').should('exist');
  });
});
