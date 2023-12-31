/// <reference types="cypress" />

describe("handling alert in cypress",()=>{

    beforeEach(()=>{
        cy.visit("https://www.webdriveruniversity.com/Popup-Alerts/index.html");
    })
    it("confirm alert is contain the correct text",()=>{
        cy.get("#button1").click()
        //notice that cypress by default press ok button
        cy.on('window:alert',(str)=>{
            expect(str).to.equal("I am an alert box!")
        })
    })

    it("click cancel in alert ",()=>{
        cy.get("#button4").click()
        //notice that cypress by default press ok button
        // if you want to press cancel return false here (window:confirm)
        cy.on('window:confirm',(str)=>{
            return false;
        })
        cy.get("#confirm-alert-text").should("have.text","You pressed Cancel!");
    })
})