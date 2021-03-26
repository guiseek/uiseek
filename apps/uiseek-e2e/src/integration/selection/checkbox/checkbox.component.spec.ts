describe('uiseek', () => {
  beforeEach(() => cy.visit('/iframe.html?id=checkboxcomponent--primary'));

  it('should render the component', () => {
    cy.get('label[uiseek][checkbox]').should('exist');
  });
});
