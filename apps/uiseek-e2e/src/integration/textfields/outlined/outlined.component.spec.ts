describe('uiseek', () => {
  beforeEach(() => cy.visit('/iframe.html?id=textfieldoutlinedcomponent--primary'));

  it('should render the component', () => {
    cy.get('label[uiseek][textfield][outlined]').should('exist');
  });
});
