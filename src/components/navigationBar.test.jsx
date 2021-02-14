import { render, screen } from "@testing-library/react";
import NavigationBar from "./navigationBar";

test("Should have user info in navigation bar", () => {
  render(<NavigationBar />);
  expect(screen.getByTestId("username").textContent).toEqual("Cody simmons");
  expect(screen.getByTestId("userDesignation").textContent).toEqual("Lecturer");
  expect(screen.getByTestId("userImage")).not.toBeNull();
});
