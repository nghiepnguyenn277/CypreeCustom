// import cypress from "cypress";

export class LoginPage {

    login_userName = '#username'
    login_password = '#password'
    login_button = ':nth-child(3) > .woocommerce-button'

    navigate(url) {
        cy.visit(url)
    }
    enterUserName(userName) {
        cy.get(this.login_userName).type(userName)

    }
    enterPassWord(password) {
        cy.get(this.login_password).type(password)
    }
    login() {
        cy.get(this.login_button).click()
    }
}