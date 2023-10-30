/// <reference types="cypress" />
import contactUsPage from "../../support/pageObjects/test-store/contactUsPage";
const myContactsUsPage = new contactUsPage();

describe("Test Contact Us page",()=>{
    
    beforeEach(function(){
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href$='contact']").then((res)=>{
            console.log(res.text())
        }).click();
    })

    it("fill all required inputs and submit successfully",()=>{
        myContactsUsPage.send("ibaa","example@test.com","hello world !","Your enquiry has been successfully sent to the store owner!")
    })
})
