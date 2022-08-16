import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("it should render text to screen", () => {
  test("renders text to screen", () => {
    render(<Header />);
    const headerText = screen.getByText("My Header");
    expect(headerText).toBeInTheDocument();
  });
});
