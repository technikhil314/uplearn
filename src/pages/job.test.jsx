import { render, screen, waitFor } from "@testing-library/react";
import { graphql } from "msw";
import { act } from "react-dom/test-utils";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { createTestStore } from "../mocks/mockStore";
import { Job } from "./job";
import { Router } from "react-router-dom";

test.only("should show correct job details", async () => {
  const history = createMemoryHistory();
  history.push("/job/bad/route");
  await act(async () => {
    render(
      <Router history={history}>
        <Provider store={createTestStore()}>
          <Job />
        </Provider>
      </Router>
    );
  });
  await waitFor(() => screen.getByTestId("job-details"));
  expect(screen.getByTestId("job-details")).toBeInTheDocument();
});
