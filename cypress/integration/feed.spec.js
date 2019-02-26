describe('Home Page', function () {
  it('displays posts', function () {
    cy.visit('/')
    cy.contains("bits")
  })
})
