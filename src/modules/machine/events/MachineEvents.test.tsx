import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../core/store";
import { initialEventsState } from "../../../test/mocks/events";
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

    const addButton = screen.getByTestId("add-event-btn");
    const inputEvent = screen.getByTestId("event-input");

    fireEvent.change(inputEvent, { target: { value: "New Event" } });
    fireEvent.click(addButton);
  });

  it("should delete a machine event", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <MachineEvents />
        </Provider>
      </BrowserRouter>,
      { initialEventsState }
    );

    const deleteButton = screen.getByTestId("delete-event-btn");
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

    const link = screen.getByTestId("link-main-page");
    fireEvent.click(link);
  });
});
