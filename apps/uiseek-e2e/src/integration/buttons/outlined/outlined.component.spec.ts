describe('uiseek', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=buttonoutlinedcomponent--primary')
  );

  it('should render the component', () => {
    cy.get('button[uiseek][outlined]').should('exist');
  });
});
