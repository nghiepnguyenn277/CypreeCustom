// import cypress from "cypress";

export class Register {

    register_email = '#reg_email'
    register_password = '#reg_password'
    register_button = '.woocommerce-Button'

    navigate(url) {
        cy.visit(url)
    }
    enterEmail(email) {
        cy.get(this.register_email).type(email)

    }
    enterPassWord(password) {
        cy.get(this.register_password).type(password)
    }
    register() {
        cy.get(this.register_button).click()
    }
}