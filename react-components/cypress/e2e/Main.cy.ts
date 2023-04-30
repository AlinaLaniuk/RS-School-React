describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  afterEach(() => {
    cy.window().trigger('unload');
  });

  it('Type text in search-bar', () => {
    cy.get('input[type="text"]').should('have.value', '').type('Rick{enter}');
    cy.get('.short-card-container').should('have.length', 20);
    cy.get('.short-card-container').each((item) => {
      expect(Cypress.$(item).text()).to.contain('Rick');
    });
  });

  it('Open and close modal', () => {
    cy.get('.short-card-container').first().click();
    cy.get('.modal-container').should('be.visible');
    cy.get('.close-button').click();
    cy.get('.modal-container').should('not.be.visible');
  });

  it('Bad request', () => {
    cy.get('input[type="text"]').type('eiuehg;oahg{enter}');
    cy.contains('Nothing to show');
  });
});
