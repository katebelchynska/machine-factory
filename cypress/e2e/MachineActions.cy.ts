const ACTION_TITLE = "Test Action";

const addActionAndAssert = (actionTitle: string) => {
  cy.getByTestId("action-input").type(actionTitle);
  cy.getByTestId("add-action-btn").click();
  cy.getByTestId("action-list")
    .children()
    .should("have.length", 1)
    .contains(actionTitle);
};

const deleteActionAndAssert = (actionTitle: string) => {
  cy.getByTestId("action-list")
    .children()
    .should("have.length", 1)
    .contains(actionTitle);
  cy.getByTestId("delete-action-btn").click();
  cy.getByTestId("action-list").children().should("have.length", 0);
};

describe("Machine Actions Integration Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should add and delete machine actions in the queue", () => {
    addActionAndAssert(ACTION_TITLE);
    deleteActionAndAssert(ACTION_TITLE);
  });

  it("should navigate to machine events page", () => {
    cy.getByTestId("link-event-page").click();

    cy.url().should("match", /\/events$/);
  });
});
