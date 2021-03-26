describe('uiseek', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttontextcomponent--primary'));

  it('should render the component', () => {
    cy.get('button[uiseek][text]').should('exist');
  });
});
