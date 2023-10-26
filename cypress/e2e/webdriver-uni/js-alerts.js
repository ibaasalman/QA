/// <reference types="cypress" />
describe("handling alert in cypress",()=>{

    it("confirm alert is contain the correct text",()=>{
        cy.visit("https://www.webdriveruniversity.com/Popup-Alerts/index.html");
        cy.get("#button1").click()
        //notice that cypress by default press ok button
        cy.on('window:alert',(str)=>{
            expect(str).to.equal("I am an alert box!")
        })
    })
})