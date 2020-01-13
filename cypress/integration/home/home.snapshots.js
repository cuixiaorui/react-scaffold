describe('home page', () => {
  it('snapshots', () => {
    cy.visit('/').then(() => {
      cy.get('[data-testid=home]').toMatchSnapshot();
    });
  });
});
