import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { createTestStore } from "../mocks/mockStore";
import JobsList from "./jobsList";

it("Should show loader while data is being fetched", async () => {
  await act(async () =>
    render(
      <Provider store={createTestStore()}>
        <JobsList />
      </Provider>
    )
  );
  expect(screen.getByTestId("loading")).toBeInTheDocument();
  await waitFor(() => screen.getByTestId("jobslist"));
});

it("Should show data when data is fetched", async () => {
  await act(async () =>
    render(
      <Provider store={createTestStore()}>
        <JobsList />
      </Provider>
    )
  );
  await waitFor(() => screen.getByTestId("jobslist"));
  expect(screen.getByTestId("jobslist")).toBeInTheDocument();
});
