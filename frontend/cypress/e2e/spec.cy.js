describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
  })
  it('true should be true', () => {
    expect(true).to.equal(true);
  })
})