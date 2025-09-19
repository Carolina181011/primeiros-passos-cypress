class MyInfoPage {
    
    selectorsList() {
        const selectors = {

            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            genericComboBox: ".oxd-select-text--arrow",
            secondItemComboBox: ".oxd-select-dropdown > :nth-child(2)",
            ThirdItemComboBox: ".oxd-select-dropdown > :nth-child(3)",
            dateField: "[placeholder='yyyy-dd-mm']",
            submitButtom: ".orangehrm-left-space[type='submit']",

        }
        
        return selectors
    }

    fillPersonalDetails(firstName, lastName){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)

    }

    fillEmployeeDetails(emploeeId,otherId,licenseNumber,licenseDate,testFieldTest){
        cy.get(this.selectorsList().genericField).eq(3).clear().type(emploeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(licenseNumber)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(licenseDate)
        cy.get(this.selectorsList().genericField).eq(8).clear().type(testFieldTest)
    
    }
    

    saveForm() {
    cy.get(this.selectorsList().submitButtom).eq(0,1).click({force: true })
    cy.get('body').should('contain' , 'Successfully Updated')

    }

    fillStatus(){
        cy.get(this.selectorsList().genericComboBox).eq(0).click({force: true })
        cy.get(this.selectorsList().secondItemComboBox).click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click({force: true })
        cy.get(this.selectorsList().ThirdItemComboBox).click()
    }

}
export default MyInfoPage