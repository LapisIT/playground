describe('storybook-pd-app', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('playground-nx-welcome').should('exist');
  });
});