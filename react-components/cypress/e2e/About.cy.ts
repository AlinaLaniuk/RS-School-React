describe('About E2E', () => {
  it('should have a text', () => {
    cy.visit('/about');
    cy.contains('Some text about us.');
  });
})