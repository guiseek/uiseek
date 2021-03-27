describe('cases', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=buttoncontainedcomponent--primary')
  );

  it('should render the component', () => {
    cy.get('uiseek-contained').should('exist');
  });
});
