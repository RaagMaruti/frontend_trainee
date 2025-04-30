// describe("Home Page", () => {
//   it("should load the home page", () => {
//     cy.visit("http://localhost:3000");
//     cy.contains("Welcome"); // Adjust to match your content
//   });
// });

describe("Navigation", () => {
  it("should navigate to the about page", () => {
    cy.visit("/");
    cy.get('button[name="counter"]').click();
    cy.url().should("include", "/counter");
    cy.get("span").contains("Counter Page");
    cy.get("button").contains("10").click();
  });
});
