import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "../app/page";
import { useRouter } from "next/navigation";

// Mock next/navigation's useRouter
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Page", () => {
  it("renders welcome text", () => {
    (useRouter as jest.Mock).mockReturnValue({ push: jest.fn() });
    render(<Page />);
    expect(
      screen.getByText(/Welcome to Learning-Next Web App/i)
    ).toBeInTheDocument();
  });

  it("navigates to /counter on button click", () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push });

    render(<Page />);
    const button = screen.getByRole("button", { name: /go to counter/i });
    fireEvent.click(button);
    expect(push).toHaveBeenCalledWith("/counter");
  });

  it("renders the image with correct alt text", () => {
    (useRouter as jest.Mock).mockReturnValue({ push: jest.fn() });
    render(<Page />);
    const img = screen.getByAltText(/image/i);
    expect(img).toBeInTheDocument();
  });

  it("renders the video element", () => {
    (useRouter as jest.Mock).mockReturnValue({ push: jest.fn() });
    render(<Page />);
    const video = screen.getByTestId("video"); // no such thing a role == video, so test id is used
    expect(video).toBeInTheDocument();
  });
});
