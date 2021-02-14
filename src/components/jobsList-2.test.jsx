import { render, screen, waitFor } from "@testing-library/react";
import { graphql } from "msw";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { createTestStore } from "../mocks/mockStore";
import { server } from "../mocks/server";
import JobsList from "./jobsList";
import Toast from "./toaster";
test("Should show loader only when error in data fetching", async () => {
  server.resetHandlers(
    graphql.query("GetAllJobs", (req, res, ctx) => {
      return res(
        ctx.errors([
          {
            message: "Not authorized",
          },
        ])
      );
    })
  );
  await act(async () =>
    render(
      <Provider store={createTestStore()}>
        <JobsList />
      </Provider>
    )
  );
  expect(screen.getByTestId("loading")).toBeInTheDocument();
  expect(() => screen.getByTestId("jobslist")).toThrow();
});

test("Should show toast when error in data fetching", async () => {
  const div = document.createElement("div");
  div.id = "toast";
  document.body.appendChild(div);
  server.resetHandlers(
    graphql.query("GetAllJobs", (req, res, ctx) => {
      return res(
        ctx.errors([
          {
            message: "Not authorized",
          },
        ])
      );
    })
  );
  await act(async () =>
    render(
      <Provider store={createTestStore()}>
        <Toast />
        <JobsList />
      </Provider>
    )
  );
  expect(screen.getByTestId("loading")).toBeInTheDocument();
  await waitFor(() => screen.getByTestId("toast"));
  expect(screen.getByTestId("toast")).toBeInTheDocument();
  expect(screen.getByTestId("toast")).toHaveClass("error");
  expect(() => screen.getByTestId("jobslist")).toThrow();
});
