export class Edit {

    old_password = '#password_current'
    new_password = '#password_1'
    reNew_password = '#password_2'


    EnterOldPass(oldPass) {
        cy.get(this.old_password).type(oldPass)
    }
    EnterNewPass(newPass) {
        cy.get(this.new_password).type(newPass)
    }
    EnterReNewPass(reNewPass) {
        cy.get(this.reNew_password).type(reNewPass)
    }

}