/// <reference types="cypress" />


describe("file for testing form that have upload file func",()=>{
    beforeEach(()=>{
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get("#file-upload").invoke("removeAttr","target").click({force:true}); 
    })
    it("submit form with file",()=>{
        cy.get("#myFile").selectFile("cypress/fixtures/bmw.jpg");
        cy.get("#submit-button").click();
        cy.on('window:alert',(str)=>{
            expect(str).to.equal("Your file has now been uploaded!")
        })
    })

    it("submit form without file",()=>{
        cy.get("#submit-button").click();
        cy.on('window:alert',(str)=>{
            expect(str).to.equal("You need to select a file to upload!")
        })
    })
    
})