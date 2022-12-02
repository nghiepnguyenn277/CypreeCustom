/// <reference types="cypress" />
import { LoginPage } from "../Function/login.js"
const loginPage = new LoginPage()


describe("Login Test Case", function () {
    beforeEach(() => {

        cy.visit('https://heyotour.com/my-account/edit-account')       //xong các Case 1  quay lại trang 

    })
    it('Nhập sai format Email', function () {
        loginPage.enterUserName('nghiepnguyen')
        loginPage.enterPassWord('123456')
        loginPage.login()
        cy.get('.fail')
    })
    it('Nhập email không tồn tại trong hệ thống', function () {

        loginPage.enterUserName('nghiepnguyen')
        loginPage.enterPassWord('123456')
        loginPage.login()
        cy.get('.fail')

    })
    it('Sai Email', function () {

        loginPage.enterUserName('nghiepnguyen')
        loginPage.enterPassWord('123456')
        loginPage.login()
        cy.get('.fail')
        expect(true).to.equal(true)
    })
    it('Sai Password', function () {

        loginPage.enterUserName('nghiepnguyen')
        loginPage.enterPassWord('123456')
        loginPage.login()
        cy.get('.fail')
    })
    it('Bỏ trống  email, password', function () {
        loginPage.login()
        cy.get('.fail')
    })
})