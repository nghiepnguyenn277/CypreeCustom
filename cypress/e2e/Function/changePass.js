export class Edit {

    old_password = ''
    new_password = ''
    reNew_password = ''


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