describe('About E2E', () => {
  afterEach(() => {
    cy.window().trigger('unload');
  });

  it('should have a text', () => {
    cy.visit('/about');
    cy.contains('Some text about us.');
  });
});
