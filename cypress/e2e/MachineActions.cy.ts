describe("Machine Actions Integration Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should add and delete machine actions in the gueue", () => {
    cy.get('[data-testId="action-input"]').type("Action 1");
    cy.get('[data-testid="add-action-btn"]').click();
    cy.get('[data-testId="action-input"]').should("have.value", "");
    cy.contains("Action 1").should("exist");

    cy.get('input[data-testId="action-input"]').type("Action 2");
    cy.get('button[data-testid="add-action-btn"]').click();
    cy.get('input[data-testId="action-input"]').should("have.value", "");
    cy.contains("Action 2").should("exist");

    cy.get('button[data-testid="delete-action-btn"]').click();
    cy.contains("Action 1").should("not.exist");
    cy.contains("Action 2").should("exist");

    cy.get('button[data-testid="delete-action-btn"]').click();
    cy.contains("Action 2").should("not.exist");
  });

  it("should navigate to machine events page", () => {
    cy.get('[data-testId="link-event-page"]').click();
  });
});
