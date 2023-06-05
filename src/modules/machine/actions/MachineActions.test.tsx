import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../core/store/";
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

    const addButton = screen.getByRole("button", { name: "enqueue" });
    const input = screen.getByLabelText("Add action to queue");

    fireEvent.change(input, { target: { value: "New Action" } });
    fireEvent.click(addButton);
  });

  it("should delete a machine action", () => {
    // Mock the initial list of machine actions
    const initialState = {
      machineActions: [
        { actionId: "1", title: "Action 1" },
        { actionId: "2", title: "Action 2" },
        { actionId: "3", title: "Action 3" },
      ],
    };

    render(
      <BrowserRouter>
        <Provider store={store}>
          <MachineActions />
        </Provider>
      </BrowserRouter>,
      { initialState }
    );

    const deleteButton = screen.getByRole("button", { name: "dequeue" });
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

    const link = screen.getByText("Go to machine events");
    fireEvent.click(link);
  });
});
