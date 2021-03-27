describe('uiseek', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=textfieldstandardcomponent--primary')
  );

  it('should render the component', () => {
    cy.get('label[uiseek][textfield][standard]').should('exist');
  });
});
