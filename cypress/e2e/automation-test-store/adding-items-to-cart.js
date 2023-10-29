/// <reference types="cypress" />
describe("add item to cart or basket", () => {
  before(function () {
    cy.fixture("prods").then((data)=>{
        globalThis.data = data.productName;
    })
  });
  beforeEach(function () {
    cy.visit("https://www.automationteststore.com/");
    cy.get('.nav-pills > li [href *= "path=52"]').contains("Hair Care").click();
  });

  it("add single item to basket", () => {
    cy.addToCart("Curls to straight Shampoo");
  });

  it.only("add multiple items to basket", () => {
    data.forEach((product)=>{
        cy.addToCart(product)
    })
    cy.get(".label.label-orange.font14").contains(3).should("have.text","3")
  });

});