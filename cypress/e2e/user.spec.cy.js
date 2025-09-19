
import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM tests', () => {

  it('User Info Update - Success', () => {
  loginPage.accessLoginPage()
  loginPage.loginWithAnyUser(userData.userSucces.username,userData.userSucces.password)
  
  dashboardPage.checkDashboardPage(),

  menuPage.accessMyInfo()

  myInfoPage.fillPersonalDetails(chance.first(), chance.last())
  myInfoPage.fillEmployeeDetails('EmployeeId','otherId','2025-07-29','2025-07-30','0123456')
  myInfoPage.fillStatus()
  myInfoPage.saveForm()   
})

it('login - Fail', () => {
  loginPage.accessLoginPage()
  loginPage.loginWithAnyUser(userData.userFail.username,userData.userFail.password)
  loginPage.checkAccessInvalid()  
 })
})

  

