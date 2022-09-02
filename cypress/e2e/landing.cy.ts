describe('Landing page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should load the page', () => {
    cy.contains('Hello');
    cy.contains('Christian Trinidad');
  });

  it('should jump to the various sections', () => {
    cy.get('.navbar a[href="/#about"]').click();
    cy.url().should('include', '#about');

    cy.wait(500);

    cy.get('.navbar a[href="/#skills"]').click();
    cy.url().should('include', '#skills');

    cy.get('.navbar a[href="/#experience"]').click();
    cy.url().should('include', '#experience');

    cy.wait(500);

    cy.get('.navbar a[href="/#projects"]').click();
    cy.url().should('include', '#projects');
  });

  it('should toggle dark theme', () => {
    localStorage.setItem('theme', 'light');

    cy.get('.theme-icon').click();

    cy.get('html.dark')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(29, 29, 29)');
  });
});
