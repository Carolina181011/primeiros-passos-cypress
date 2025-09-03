describe('Orange HRM tests', () => {
  it('login success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get(':nth-child(2) > .oxd-input-group').type('Admin')
  cy.get('[name="password"]').type('admin123') 
  cy.get('.oxd-button').click()
  cy.location('pathname').should('equal' , '/web/index.php/dashboard/index')
  cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
})
it('login Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get(':nth-child(2) > .oxd-input-group').type('Test')
  cy.get('[name="password"]').type('Test') 
  cy.get('.oxd-button').click()
  cy.get('.oxd-alert')
 })
})