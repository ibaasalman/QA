/// <reference types="cypress" />
describe("Test Contact Us page",()=>{
    it("fill all required inputs and submit successfully",()=>{
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href$='contact']").then((res)=>{
            console.log(res.text())
        }).click();
        cy.get("#ContactUsFrm_first_name").type("ibaa");
        cy.get("#ContactUsFrm_email").type("example@test.com");
        cy.get("#ContactUsFrm_enquiry").type("hello world !");
        cy.get("button[title='Submit']").click();
        cy.get(".contentpanel .mb40").contains("Your enquiry has been successfully sent to the store owner!");
    })
})
