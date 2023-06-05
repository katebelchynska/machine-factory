import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Page404 from "./404";

describe("Page404 component", () => {
  it("should render Page404 component", () => {
    render(
      <BrowserRouter>
        <Page404 />
      </BrowserRouter>
    );

    const headingElement = screen.getByTestId("404-heading");
    expect(headingElement).toBeInTheDocument();

    const linkElement = screen.getByTestId("to-main-page");
    expect(linkElement).toBeInTheDocument();
  });

  it("should navigate to the main page", () => {
    render(
      <BrowserRouter>
        <Page404 />
      </BrowserRouter>
    );

    const linkElement = screen.getByTestId("to-main-page");
    expect(linkElement).toHaveAttribute("href", "/");
  });
});
