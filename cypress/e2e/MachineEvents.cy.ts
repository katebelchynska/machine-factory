describe("MachineEvents Integration Test", () => {
  beforeEach(() => {
    cy.visit("/events");
  });

  it("should add and delete machine event in the stack", () => {
    cy.get('[data-testId="event-input"]').type("Event 1");
    cy.get('[data-testId="add-event-btn"]').click();
    cy.get('[data-testId="event-input"]').should("have.value", "");
    cy.contains("Event 1").should("exist");

    cy.get('[data-testId="event-input"]').type("Event 2");
    cy.get('[data-testid="add-event-btn"]').click();
    cy.get('[data-testId="event-input"]').should("have.value", "");
    cy.contains("Event 2").should("exist");

    cy.get('[data-testid="delete-event-btn"]').click();
    cy.contains("Event 1").should("exist");
    cy.contains("Event 2").should("not.exist");

    cy.get('[data-testid="delete-event-btn"]').click();
    cy.contains("Event 1").should("not.exist");
  });

  it("should navigate to the main page", () => {
    cy.get('[data-testId="link-main-page"]').click();

    cy.url().should("eq", "http://localhost:3000/");
  });
});
