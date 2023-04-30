describe('Form E2E', () => {
  beforeEach(() => {
    cy.visit('/forms');
  });

  afterEach(() => {
    cy.window().trigger('unload');
  });

  it('should have a form', () => {
    cy.get('input[id="text-input"]').should('have.value', '');
    cy.get('.submit-button').should('have.value', 'Submit');
  });

  it('empty form and errors', () => {
    cy.get('.submit-button').click();
    cy.contains('At least 5 characters in each word, at least 2 words, each word starts with uppercased letter. Only English');
    cy.contains('This is required');
    cy.contains('You need to choose gender',);
    cy.contains('You need to choose dessert',);
    cy.contains('You need to choose some additives');
    cy.contains('Incorrect file. It must be jpg or png file');
  })

  it('after correct filling form card should be added', () => {
    cy.get('input[id="text-input"]').type('Alina Laniuk');
    cy.get('input[id="date-input"]').type('1999-12-31');
    cy.get('[type="radio"]').check('female');
    cy.get('select').select('cake');
    cy.get('[type="checkbox"]').check();
    cy.get('input[type=file]').selectFile('public/search-bar.png');
    cy.get('.submit-button').click();
    cy.get('.user-card-container').should('have.text', 'Alina LaniukUser birthday: 1999-12-31User gender: femaleUser favorite desserts: cakeUser favorite additives:chocolate caramel nuts berries vanilla ');
    cy.get('input[id="text-input"]').should('have.value', '');
  });
})