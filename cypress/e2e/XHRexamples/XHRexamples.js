/// <reference types="cypress" />

describe("intercept cypress examples website", () => {
  beforeEach(function () {
    cy.visit("https://example.cypress.io/commands/network-requests");
  });

  it("intercept get req", () => {
    cy.intercept(
      {
        method: "GET",
        url: "**/comments/*",
      },
      {
        body: {
          postId: 1,
          id: 1,
          name: "ibaa salman",
          email: "test@gmail.com",
          body: "HELLO WORLD !! :)",
        },
      }
    ).as("getComments");
    cy.get(".network-btn").click();
    cy.wait("@getComments").its("response.statusCode").should("eq", 200);
  });

  it("Post Request", () => {
    cy.intercept("POST", "/comments").as("postComment");

    cy.get(".network-post").click();

    cy.wait("@postComment").should(({request, response}) => {
      console.log(request);

      expect(request.body).to.include("email");

      console.log(response);
      expect(response.body).to.have.property("name", "Using POST in cy.intercept()");

      expect(request.headers).to.have.property("content-type");
      expect(request.headers).to.have.property("origin",  "https://example.cypress.io");
    })
  })

  it.only("Put Request", () => {
    cy.intercept({
      method: "PUT",
      url: "**/comments/*"
    },
    {
      statusCode: 404,
      body: { error: "no comments :("},
      delay: 500
    }).as("putComment");

    cy.get(".network-put").click();

    cy.wait("@putComment")

    cy.get(".network-put-comment").should("contain", "no comments :(");
  })

});
