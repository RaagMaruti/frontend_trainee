import { render, screen, fireEvent } from "@testing-library/react";
import Page from "../../app/counter/page";
import { usePathname } from "next/navigation";

import "@testing-library/jest-dom";

// mock function will chamge as per the need of the page
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("Page", () => {
  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue("/counter");
  });

  it("renders pathname and initializes count to 10", async () => {
    render(<Page />);
    expect(screen.getByText(/Counter Page, \/counter/)).toBeInTheDocument();
    const button = screen.getByRole("button", { name: "10" });
    expect(button).toBeInTheDocument();
  });

  it("increments count when button is clicked", () => {
    render(<Page />);

    const button = screen.getByRole("button", { name: "10" });
    fireEvent.click(button);

    expect(screen.getByRole("button", { name: "11" })).toBeInTheDocument();
  });
});
