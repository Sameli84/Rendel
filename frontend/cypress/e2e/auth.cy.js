describe('The Authentication Page', () => {
  it('should allow switching between SignUp and Login', () => {
    cy.visit('auth')
    cy.contains('SignUp instead?').click()
    cy.get('button').should('not.contain', 'SignUp instead?')
    cy.contains('Login instead?').click()
    cy.get('button').should('not.contain', 'Login instead?')
  })

  it('should allow user to signup with valid credentials', () => {
    cy.visit('auth')
    cy.contains('SignUp instead?').click()
    cy.get('button').should('not.contain', 'SignUp instead?')
    cy.get('#name').type('Sami')
    cy.get('#email').type('Sami@iam.com')
    cy.get('#password').type('samsam')
    cy.get('form > .button').click()
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}` )
  })

  it('should allow user to login with valid credentials', () => {
    cy.login('sami@iam.com', 'samsam')
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}` )
  })
})