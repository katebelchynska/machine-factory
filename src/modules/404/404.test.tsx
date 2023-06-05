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

    const headingElement = screen.getByRole("heading", {
      level: 1,
      name: /Page doesn't exist/i,
    });
    expect(headingElement).toBeInTheDocument();

    const linkElement = screen.getByRole("link", {
      name: /Back to the main page/i,
    });
    expect(linkElement).toBeInTheDocument();
  });

  it("should navigate to the main page", () => {
    render(
      <BrowserRouter>
        <Page404 />
      </BrowserRouter>
    );

    const linkElement = screen.getByRole("link", {
      name: /Back to the main page/i,
    });
    expect(linkElement).toHaveAttribute("href", "/");
  });
});
