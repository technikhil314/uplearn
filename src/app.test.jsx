import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import App from "./app";
import store from "./duck/store";

test("renders learn react link", async () => {
  await act(async () =>
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
  );
  expect(screen.getByTestId("loading")).toBeInTheDocument();
  await waitFor(() => screen.getByTestId("demo"));
  expect(screen.getByTestId("demo")).toBeInTheDocument();
});
