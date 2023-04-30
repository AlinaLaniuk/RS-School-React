describe('Not found page', () => {
  beforeEach(() => {
    cy.visit('/dfgxdgfgh');
  });

  afterEach(() => {
    cy.window().trigger('unload');
  });

  it('Render not found page', () => {
    cy.contains('Page Not Found');
  });
});
