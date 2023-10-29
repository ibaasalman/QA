/// <reference types="cypress" />

describe("Test Contact Us page", () => {
  beforeEach(function () {
    //cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");

    // this is to demonstate that cypress dont support mulitple windows so
    // if there target_blanck you should reomve it using invoke
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get("#contact-us").invoke("removeAttr", "target").click();
  });
  it("cheack page title and charset", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "Contact-Us");
  });

  it("fill all required inputs and submit successfully", () => {
    cy.get('[placeholder="First Name"]').type("ibaa");
    cy.get('[placeholder="Last Name"]').type("salman");
    cy.get('[placeholder="Email Address"]').type("example@gmail.com");
    cy.get('[placeholder="Comments"]').type("Hello World :) ");
    cy.get('[Value="SUBMIT"]').click();
    cy.get("#contact_reply > h1").should(
      "have.text",
      "Thank You for your Message!"
    );
  });
});
