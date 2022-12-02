export class Edit {

    edit_fullName = ''
    edit_userName = ''
    edit_phoneNumber = ''
    edit_email = ''

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


}