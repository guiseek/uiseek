describe('uiseek', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=textfieldfilledcomponent--primary')
  );

  it('should render the component', () => {
    cy.get('label[uiseek][textfield][filled]').should('exist');
  });
});
