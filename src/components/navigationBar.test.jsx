import { render, screen } from "@testing-library/react";
import NavigationBar from "./navigationBar";

test("Should have user info in navigation bar", () => {
  const { container } = render(<NavigationBar />);
  expect(container).toMatchSnapshot();
});
