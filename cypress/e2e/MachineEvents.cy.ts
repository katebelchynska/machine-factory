const EVENT_TITLE = "Test Event";

const addEventAndAssert = (eventTitle: string) => {
  cy.getByTestId("event-input").type(eventTitle);
  cy.getByTestId("add-event-btn").click();
  cy.getByTestId("event-list")
    .children()
    .should("have.length", 1)
    .contains(eventTitle);
};

const deleteEventAndAssert = (eventTitle: string) => {
  cy.getByTestId("event-list")
    .children()
    .should("have.length", 1)
    .contains(eventTitle);
  cy.getByTestId("delete-event-btn").click();
  cy.getByTestId("event-list").children().should("have.length", 0);
};

describe("MachineEvents Integration Test", () => {
  beforeEach(() => {
    cy.visit("/events");
  });

  it("should add and delete machine event in the stack", () => {
    addEventAndAssert(EVENT_TITLE);

    deleteEventAndAssert(EVENT_TITLE);
  });

  it("should navigate to the main page", () => {
    cy.getByTestId("link-main-page").click();

    cy.location("pathname").should("eq", "/");
  });
});
