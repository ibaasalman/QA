/// <reference types="cypress" />

describe("itreate on items",()=>{

    it("log information about all haircare products",()=>{
        cy.visit("https://www.automationteststore.com/");
        cy.get(".categorymenu a[href*='category&path=']").contains("Hair Care").click();
        cy.get(".fixed_wrapper .prdocutname").each(($el , $index , $list)=>{
            cy.log("index : "+$index +" | "+$el.text())
        });

    })
    
    it("add specific product to the cart",()=>{
        cy.visit("https://www.automationteststore.com/");
        cy.get(".categorymenu a[href*='category&path=']").contains("Hair Care").click();
        cy.get(".fixed_wrapper .prdocutname").each(($el , $index , $list)=>{
           if($el.text().includes("Curls to straight Shampoo")){
            cy.wrap($el).click()
           }
           
        });
    })

})