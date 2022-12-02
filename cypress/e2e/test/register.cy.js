/// <reference types="cypress" />

import { Register } from "../Function/register.js"
import { Message } from "../Function/mesasge.js"
const register = new Register()
const mesasge = new Message()


describe("Register Test Case", function () {
    beforeEach(() => {

        cy.visit('https://heyotour.com/my-account/')       //xong các Case 1  quay lại trang 

    })
    it('Nhập sai format Email', function () {

        register.enterEmail('nghiepnguyen2707@ctgmail')
        register.enterPassWord('Nghiep0907519820')
        register.register()



    })
    it('Nhập Email đã tồn tại trong hệ thống', function () {

        register.enterEmail('nghiepnguyen2707ct@gmail.com')
        register.enterPassWord('Nghiep0907819820')
        register.register()



    })
    it('Nhập mật khẩu dưới 12 ký tự', function () {

        register.enterEmail('nghiepnguyen357@gmail.com')
        register.enterPassWord('12345678')
        cy.get('.woocommerce-Button').should('be.disabled')


    })
    it('Nhập mật khẩu Yếu', function () {

        register.enterEmail('nghiepnguyen357@gmail.com')
        register.enterPassWord('123456789011')
        cy.get('.woocommerce-Button').should('be.disabled')


    })
    // it('Nhập mật khẩu sử dụng các chữ cái viết hoa và viết thường, số và các ký hiệu như! "? $% ^ &', function () {

    //     register.enterEmail('nghiepnguyenn357@gmail.com')
    //     register.enterPassWord('Nghiep@12345678')
    //     register.register()
    // })

    it('Bỏ trống email, password', function () {

        register.register()
        mesasge.error()

    })
})