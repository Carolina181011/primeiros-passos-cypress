import { first } from 'lodash'
import userData from '../fixtures/user-data.json'

describe('Orange HRM tests', () => {

  const selectorsList = {
  usernameField: "[name='username']",
  passwordField: "[name='password']",
  loginButton: "[type='submit']",
  sectionTittleTopBar: ".oxd-topbar-header-breadcrumb-module",
  dashboardGrid: ".orangehrm-dashboard-grid",
  wrongCredentialAlert: "[role='alert']",
  myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
  firstNameField: "[name='firstName']",
  lastNameField: "[name='lastName']",
  genericField: ".oxd-input--active",
  dateField: "[placeholder='yyyy-dd-mm']",
  submitButtom: ".orangehrm-left-space[type='submit']",

}

  it.only('User Info Update - Success', () => {

  cy.visit('auth/login')
  cy.get(selectorsList.usernameField).type(userData.userSucces.username)
  cy.get(selectorsList.passwordField).type(userData.userSucces.password) 
  cy.get(selectorsList.loginButton).click()
  cy.location('pathname').should('equal' , '/web/index.php/dashboard/index')
  cy.get(selectorsList.dashboardGrid)
  cy.get(selectorsList.myInfoButton).click()
  cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
  cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
  cy.get(selectorsList.genericField).eq(3).clear().type('EIdTest')
  cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
  cy.get(selectorsList.genericField).eq(5).clear().type('LicenseNumberTest')
  cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-10')
  cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-10')
  cy.get(selectorsList.genericField).eq(8).clear().type('Test_FieldTest')
  cy.get(selectorsList.submitButtom).eq(0,1).click()
  cy.get('body').should('contain', 'Successfully Updated')
  
})
it('login Fail', () => {
    cy.visit('auth/login')
  cy.get(selectorsList.usernameField).type(userData.userFail.username)
  cy.get(selectorsList.passwordField).type(userData.userFail.password) 
  cy.get(selectorsList.loginButton).click()
  cy.get(selectorsList.wrongCredentialAlert)
 }) 
 
})