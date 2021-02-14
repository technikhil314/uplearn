import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import App from "./app";
import { createTestStore } from "./mocks/mockStore";

test("Should match snapshot", async () => {
  let renderResult;
  await act(async () => {
    renderResult = render(
      <Provider store={createTestStore()}>
        <App />
      </Provider>
    );
    return renderResult;
  });
  await waitFor(() => screen.getByTestId("jobslist"));
  expect(renderResult.container).toMatchSnapshot();
});
