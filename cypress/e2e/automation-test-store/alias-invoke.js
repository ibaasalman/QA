/// <reference types="cypress" />

describe("aias and invoke exmaples",()=>{

    it("calculate items prices including ones on sale",()=>{
        cy.visit("https://www.automationteststore.com/");
        cy.get(".thumbnail").as("productThumbnail");

        let sum = 0;

        // product not in sale only have .oneprice  class
        cy.get("@productThumbnail").find(".oneprice").invoke('text').as('prodprices');
        cy.get('@prodprices').then(items=>{
            const prices = items.split('$');
            let nonsaleprices = 0;
            prices.forEach(i=>{
                nonsaleprices += +i;
            })
            sum += nonsaleprices;
            cy.log("Non SALE prods sum is :"+ nonsaleprices)
            
        })

        // product on sale have .pricenew class
        cy.get("@productThumbnail").find(".pricenew").invoke('text').as('saleprodprices');
        cy.get('@saleprodprices').then(items=>{
            const prices = items.split('$');
            let saleprices = 0;
            prices.forEach(i=>{
                saleprices += +i;
            })
            sum += saleprices;
            cy.log("SALE prods sum is :"+ saleprices)
            cy.log("total sum : "+sum)
        })

       
    })
})