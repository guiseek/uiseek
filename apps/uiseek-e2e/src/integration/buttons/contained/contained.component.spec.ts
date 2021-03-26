describe('uiseek', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttoncontainedcomponent--primary'));

  it('should render the component', () => {
    cy.get('button[uiseek][contained]').should('exist');
  });
});
