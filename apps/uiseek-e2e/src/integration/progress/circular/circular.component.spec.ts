describe('uiseek', () => {
  beforeEach(() => cy.visit('/iframe.html?id=progresscircularcomponent--primary'));

  it('should render the component', () => {
    cy.get('progress[uiseek][circular]').should('exist');
  });
});
