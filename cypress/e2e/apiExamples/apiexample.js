/// <reference types="cypress" />
describe("API (json-server examples)",()=>{
    let id = -1;
    it("publish new a post",()=>{
        cy.request({
            method:"POST",
            url:"http://localhost:3000/posts",
            header:{
                accepts : "application/json"
            },
            body:{
                title : "PLaces to visit in Jordan",
                author : "ali kedman"
            }
        }).then(res=>{
            id = res.body.id;
            expect(res.status).to.eq(201)
        })
    })

    it("Update/Edit a post",()=>{
        cy.request({
            method:"PUT",
            url:("http://localhost:3000/posts/"+id),
            header:{
                accepts : "application/json"
            },
            body:{
                title : "PLaces to visit in Jordan Updted",
                author : "ali keedman"
            }
        }).then(res=>{
            expect(res.status).to.eq(200)
        })
    })

    it("DELET a post",()=>{
        cy.request({
            method:"DELETE",
            url:("http://localhost:3000/posts/"+id),
        }).then(res=>{
            expect(res.status).to.eq(200)
        })
    })

})