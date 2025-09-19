import userData from "../fixtures/user-data.json"
import DashboardPage from "../pages/dashboardPage"
import LoginPage from "../pages/loginPage"


const dashboardPage = new DashboardPage()
const loginPage = new LoginPage()

describe('Login Orange HRM tests', () => {

it('login - Fail', () => {
  loginPage.accessLoginPage()
  loginPage.loginWithAnyUser(userData.userFail.username,userData.userFail.password)
  loginPage.checkAccessInvalid()  
 })

 it('login - Success', () => {
  loginPage.accessLoginPage()
  loginPage.loginWithAnyUser(userData.userSucces.username,userData.userSucces.password)
  dashboardPage.checkDashboardPage()
  
 })
})

  

