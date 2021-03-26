describe('uiseek', () => {
  beforeEach(() => cy.visit('/iframe.html?id=progresslinearcomponent--primary'));

  it('should render the component', () => {
    cy.get('progress[uiseek][linear]').should('exist');
  });
});
