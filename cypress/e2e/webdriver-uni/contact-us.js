/// <reference types="cypress" />

describe("Test Contact Us page", () => {
  before(function () {

    cy.fixture("example").then((d)=>{
      //this.data = d;
      globalThis.data = d;
    })
    //cy.fixture("example").as("data")
    //then in each test get data from ("data") and handle it in then => {}
    // cy.get("@data").then((user) => {
    //   cy.get("#ContactUsFrm_first_name").type(user.first_name);
    //   cy.get("#ContactUsFrm_email").type(user.email);
    // });
  });

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
    cy.get('[placeholder="First Name"]').type(data.firstname);
    cy.get('[placeholder="Last Name"]').type(data.lastname);
    cy.get('[placeholder="Email Address"]').type(data.email);
    cy.get('[placeholder="Comments"]').type(data.body);
    cy.get('[Value="SUBMIT"]').click();
    cy.get("#contact_reply > h1").should(
      "have.text",
      "Thank You for your Message!"
    );
  });
});
