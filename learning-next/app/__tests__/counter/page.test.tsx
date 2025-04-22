import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Page from "counter/page";
import * as nextNavigation from "next/navigation";

vi.mock("next/navigation", () => ({
  usePathname: vi.fn(),
}));

describe("Page component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (nextNavigation.usePathname as vi.Mock).mockReturnValue("/counter");
    cleanup();
  });

  it("renders with the pathname and sets initial count to 10", () => {
    render(<Page />);

    expect(screen.getByText("Counter Page, /counter")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "10" })).toBeInTheDocument();
  });

  it("increments the count when the button is clicked", () => {
    render(<Page />);

    const button = screen.getByRole("button", { name: "10" });

    fireEvent.click(button);
    expect(screen.getByRole("button", { name: "11" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "11" }));
    expect(screen.getByRole("button", { name: "12" })).toBeInTheDocument();
  });
});
