export class Message {

    errorMessge = '.message-container'

    error() {
        cy.get(this.errorMessge).contains('Lỗi: Vui lòng cung cấp một địa chỉ email hợp lệ.')
    }

}