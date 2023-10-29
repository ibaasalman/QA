/// <reference types="cypress" />
describe("these tests are for trying to work with checkboxes  ",()=>{
    beforeEach(function(){
        cy.visit("https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html");
    })
    it("checking one check box",()=>{
        cy.get("#checkboxes input[type='checkbox']").first().check().should('be.checked');
    })

    it("un-checking one check box",()=>{
        cy.get("#checkboxes input[type='checkbox']").eq(2).uncheck().should('not.be.checked');;
    })

    it("checking multiple check boxs",()=>{
        // pass aray of check box values that you want to check or pass one value without array if you  want to check one of them
        cy.get("#checkboxes input[type='checkbox']").check(["option-1","option-2","option-3","option-4"]).should('be.checked');;
    })
})
