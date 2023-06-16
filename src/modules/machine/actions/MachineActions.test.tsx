import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../core/store/";
import { initialActionsState } from "../../../test/mocks/actions";
import MachineActions from "./MachineActions";

describe("MachineActions component", () => {
  it("should render MachineActions component", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <MachineActions />
        </Provider>
      </BrowserRouter>
    );
  });

  it("should add a machine action", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <MachineActions />
        </Provider>
      </BrowserRouter>
    );

    const addButton = screen.getByTestId("add-action-btnn");
    const inputAction = screen.getByTestId("action-input");

    fireEvent.change(inputAction, { target: { value: "New Action" } });
    fireEvent.click(addButton);
  });

  it("should delete a machine action", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <MachineActions />
        </Provider>
      </BrowserRouter>,
      { initialActionsState }
    );

    const deleteButton = screen.getByTestId("delete-action-btn");
    fireEvent.click(deleteButton);
  });

  it("should navigate to machine events page", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <MachineActions />
        </Provider>
      </BrowserRouter>
    );

    const link = screen.getByTestId("link-event-page");
    fireEvent.click(link);
  });
});
