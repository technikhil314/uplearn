import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import JobCard from "./jobCard";

test("Should have correct comapny name rendered", async () => {
  const mockJob = {
    id: "somerandomjobid",
    title: "Some random job title",
    cities: [
      {
        id: "somerandomcityid",
        name: "Some city",
      },
      {
        id: "somerandomcityid2",
        name: "Some city 2",
      },
    ],
    countries: [
      {
        id: "somerandomcityid2",
        name: "Some city 2",
      },
    ],
    remotes: [
      {
        name: "remote",
        type: "remote",
      },
    ],
    company: {
      name: "some comapny name",
      logoUrl: "//via.placeholder.com/80x80",
    },
  };
  render(<JobCard job={mockJob} />);
  expect(screen.getByTestId("company")).toHaveTextContent("some comapny name");
});

test("Should have correct job title rendered", async () => {
  const mockJob = {
    id: "somerandomjobid",
    title: "Some random job title",
    cities: [
      {
        id: "somerandomcityid",
        name: "Some city",
      },
      {
        id: "somerandomcityid2",
        name: "Some city 2",
      },
    ],
    countries: [
      {
        id: "somerandomcityid2",
        name: "Some city 2",
      },
    ],
    remotes: [
      {
        name: "remote",
        type: "remote",
      },
    ],
    company: {
      name: "some comapny name",
      logoUrl: "//via.placeholder.com/80x80",
    },
  };
  render(<JobCard job={mockJob} />);
  expect(screen.getByTestId("title")).toHaveTextContent(
    "Some random job title"
  );
});

test("Should have correct country rendered", async () => {
  let mockJob = {
    id: "somerandomjobid",
    title: "Some random job title",
    cities: [
      {
        id: "somerandomcityid",
        name: "Some city",
      },
      {
        id: "somerandomcityid2",
        name: "Some city 2",
      },
    ],
    countries: [
      {
        id: "somerandomcityid2",
        name: "Some city 2",
      },
    ],
    remotes: [
      {
        name: "remote",
        type: "remote",
      },
    ],
    company: {
      name: "some comapny name",
      logoUrl: "//via.placeholder.com/80x80",
    },
  };
  const { rerender } = render(<JobCard job={mockJob} />);
  expect(screen.getByTestId("country")).toHaveTextContent("Some city 2");
  mockJob.countries = [];
  rerender(<JobCard job={mockJob} />);
  expect(screen.getByTestId("country")).toHaveTextContent("NA");
});

test("Should have correct city rendered", async () => {
  let mockJob = {
    id: "somerandomjobid",
    title: "Some random job title",
    cities: [
      {
        id: "somerandomcityid",
        name: "Some city",
      },
      {
        id: "somerandomcityid2",
        name: "Some city 2",
      },
    ],
    countries: [
      {
        id: "somerandomcityid2",
        name: "Some city 2",
      },
    ],
    remotes: [
      {
        name: "remote",
        type: "remote",
      },
    ],
    company: {
      name: "some comapny name",
      logoUrl: "//via.placeholder.com/80x80",
    },
  };
  const { rerender } = render(<JobCard job={mockJob} />);
  expect(screen.getByTestId("city")).toHaveTextContent(
    "Some city, Some city 2"
  );
  mockJob.cities = [];
  rerender(<JobCard job={mockJob} />);
  expect(screen.getByTestId("city")).toHaveTextContent("NA");
});

test("Should have correct remote job rendered", async () => {
  let mockJob = {
    id: "somerandomjobid",
    title: "Some random job title",
    cities: [
      {
        id: "somerandomcityid",
        name: "Some city",
      },
      {
        id: "somerandomcityid2",
        name: "Some city 2",
      },
    ],
    countries: [
      {
        id: "somerandomcityid2",
        name: "Some city 2",
      },
    ],
    remotes: [
      {
        name: "remote",
        type: "remote",
      },
    ],
    company: {
      name: "some comapny name",
      logoUrl: "//mockvia.placeholder.com/80x80",
    },
  };
  const { rerender } = render(<JobCard job={mockJob} />);
  expect(screen.getByTestId("isRemote")).toHaveTextContent("Yes");
  mockJob.remotes = [];
  rerender(<JobCard job={mockJob} />);
  expect(screen.getByTestId("isRemote")).toHaveTextContent("No");
});

test("Should have correct logo src rendered", async () => {
  let mockJob = {
    id: "somerandomjobid",
    title: "Some random job title",
    cities: [
      {
        id: "somerandomcityid",
        name: "Some city",
      },
      {
        id: "somerandomcityid2",
        name: "Some city 2",
      },
    ],
    countries: [
      {
        id: "somerandomcityid2",
        name: "Some city 2",
      },
    ],
    remotes: [
      {
        name: "remote",
        type: "remote",
      },
    ],
    company: {
      name: "some comapny name",
      logoUrl: "//mockvia.placeholder.com/80x80",
    },
  };
  const { rerender } = render(<JobCard job={mockJob} />);
  expect(screen.getByTestId("companyLogo").src).toEqual(
    "http://mockvia.placeholder.com/80x80"
  );
  mockJob.company.logoUrl = "";
  rerender(<JobCard job={mockJob} />);
  expect(screen.getByTestId("companyLogo").src).toEqual(
    "http://via.placeholder.com/80x80"
  );
});
