import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { homeAsyncActions } from "../ducks/home";
import Spinner from "./spinner";
export default function JobsList() {
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => {
    return {
      jobs: state.home.jobs,
      hasError: state.home.hasError,
      errorMessage: state.home.message,
    };
  });
  useEffect(() => {
    dispatch(homeAsyncActions.getAllJobs());
  }, [dispatch]);
  if (!jobs) {
    return <Spinner text="Loading..." />;
  }
  return jobs && jobs.length > 0 ? (
    <div data-testid="demo">{JSON.stringify(jobs)}</div>
  ) : (
    <></>
  );
}
