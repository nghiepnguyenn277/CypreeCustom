export class Edit {

    edit_fullName = '#account_first_name'
    edit_userName = '#account_display_name'
    edit_phoneNumber = '#billing_phone'
    edit_email = '#account_email'
    sunmitEdit_button = '.woocommerce-Button'
    enterFullName(fullName) {
        cy.get(this.edit_fullName).type(fullName)
    }
    enterUserName(userName) {
        cy.get(this.edit_userName).type(userName)
    }
    enterPhoneNumber(phoneNumber) {
        cy.get(this.edit_phoneNumber).type(phoneNumber)
    }
    enterEmail(email) {
        cy.get(this.edit_email).type(email)
    }
    editbutton() {
        cy.get(this.sunmitEdit_button).click()
    }

}