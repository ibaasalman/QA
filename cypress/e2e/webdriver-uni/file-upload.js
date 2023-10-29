/// <reference types="cypress" />


describe("file for testing form that have upload file func",()=>{
    it("submit form with file",()=>{
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get("#file-upload").invoke("removeAttr","target").click({force:true});
        cy.get("#myFile").selectFile("cypress/fixtures/bmw.jpg");
        cy.get("#submit-button").click();
        cy.on('window:alert',(str)=>{
            expect(str).to.equal("Your file has now been uploaded!")
        })
    })

    it("submit form without file",()=>{
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get("#file-upload").invoke("removeAttr","target").click({force:true});
        cy.get("#submit-button").click();
        cy.on('window:alert',(str)=>{
            expect(str).to.equal("You need to select a file to upload!")
        })
    })
    
})