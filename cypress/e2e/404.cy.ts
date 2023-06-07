describe("Page404", () => {
  beforeEach(() => {
    cy.visit("/404");
  });

  it("should display the 'Page doesn't exist' heading", () => {
    cy.getByTestId("404-heading").should("contain", "Page doesn't exist");
  });

  it("should navigate to the main page", () => {
    cy.getByTestId("to-main-page").click();

    cy.url().should("match", /\/$/);
  });
});
