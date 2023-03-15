describe('cities landing page', () => {
  it('should show the cities heading', () => {
    cy.visit('/')
    cy.get('h1').should('contain', 'Capital Cities')
  })

  it('should open the Login page when clicking Authenticate', () => {
    cy.visit('/')
    cy.contains('AUTHENTICATE').click()
    cy.url().should('include', 'auth')
    cy.get('h2').should('contain', 'Login')
  })

  it('should allow logged user to add city', () => {
    cy.login('sami@iam.com', 'samsam')
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}`)
    cy.contains('ADD CITY').click()
    cy.get('#addCity').type('Luanda')
    cy.get('#addCountry').type('Angola')
    cy.get('#addImage').type('https://en.wikipedia.org/wiki/Luanda#/media/File:National_Assembly_Building_(19898889148)_(cropped).jpg')
    cy.get('.button').click()

    cy.visit('/')
    cy.contains('Luanda - Angola')
  })
})