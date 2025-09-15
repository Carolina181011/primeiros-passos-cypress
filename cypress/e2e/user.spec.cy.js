
import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()


describe('Orange HRM tests', () => {

  const selectorsList = {


  firstNameField: "[name='firstName']",
  lastNameField: "[name='lastName']",
  genericField: ".oxd-input--active",
  genericComboBox: ".oxd-select-text--arrow",
  secondItemComboBox: ".oxd-select-dropdown > :nth-child(2)",
  ThirdItemComboBox: ".oxd-select-dropdown > :nth-child(3)",
  dateField: "[placeholder='yyyy-dd-mm']",
  submitButtom: ".orangehrm-left-space[type='submit']",

}

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucces.username,userData.userSucces.password)
    
    dashboardPage.checkDashboardPage(),

    menuPage.accessMyInfo()



  cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
  cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
  cy.get(selectorsList.genericField).eq(3).clear().type('EIdTest')
  cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
  cy.get(selectorsList.genericField).eq(5).clear().type('LicenseNumberTest')
  cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-10')
  cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-10')
  cy.get(selectorsList.genericField).eq(8).clear().type('Test_FieldTest')
  cy.get(selectorsList.submitButtom).eq(0,1).click({force: true })
  cy.get('body').should('contain' , 'Successfully Updated')
    
  
  cy.get(selectorsList.genericComboBox).eq(0).click({force: true })
  cy.get(selectorsList.secondItemComboBox).click()
  cy.get(selectorsList.genericComboBox).eq(1).click({force: true })
  cy.get(selectorsList.ThirdItemComboBox).click()
  
  
})
it('login Fail', () => {
    cy.visit('auth/login')
  cy.get(selectorsList.usernameField).type(userData.userFail.username)
  cy.get(selectorsList.passwordField).type(userData.userFail.password) 
  cy.get(selectorsList.loginButton).click()
  cy.get(selectorsList.wrongCredentialAlert)
 }) 
 
})