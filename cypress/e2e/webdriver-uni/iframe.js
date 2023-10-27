/// <reference types="cypress" />
describe("these tests are for trying to work with ifram  ",()=>{
    it("clicking inide iframe (+assertion)",()=>{
        // you need to know that cypress cannot interact directly with iframes
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#iframe').invoke("removeAttr","target").click();
        cy.get("#frame").then(i=>{
           const body = i.contents().find("body");
           cy.wrap(body).as("iframe");
        })
        cy.get("@iframe").find("#button-find-out-more").click()
        cy.get("@iframe").find("#myModal").should("contain","Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...");
    })
})