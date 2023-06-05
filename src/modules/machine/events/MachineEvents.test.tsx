import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../core/store";
import MachineEvents from "./MachineEvents";

describe("MachineEvents component", () => {
  it("should render MachineEvents component", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <MachineEvents />
        </Provider>
      </BrowserRouter>
    );
  });

  it("should add a machine event", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <MachineEvents />
        </Provider>
      </BrowserRouter>
    );

    const addButton = screen.getByRole("button", { name: "push" });
    const input = screen.getByLabelText("Add event to stack");

    fireEvent.change(input, { target: { value: "New Event" } });
    fireEvent.click(addButton);
  });

  it("should delete a machine event", () => {
    // Mock the initial list of machine events
    const initialState = {
      machineEvents: [
        { eventId: "1", title: "Event 1" },
        { eventId: "2", title: "Event 2" },
        { eventId: "3", title: "Event 3" },
      ],
    };

    render(
      <BrowserRouter>
        <Provider store={store}>
          <MachineEvents />
        </Provider>
      </BrowserRouter>,
      { initialState }
    );

    const deleteButton = screen.getByRole("button", { name: "pop" });
    fireEvent.click(deleteButton);
  });

  it("should navigate to the main page", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <MachineEvents />
        </Provider>
      </BrowserRouter>
    );

    const link = screen.getByText("Go to the main page");
    fireEvent.click(link);
  });
});
