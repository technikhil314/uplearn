import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import JobCard from "../components/jobCard";
import Spinner from "../components/spinner";
import { jobsAsyncActions } from "../ducks/job";

export function Job() {
  const params = useParams();
  const dispatch = useDispatch();
  const job = useSelector((state) => state.job);
  useEffect(() => {
    dispatch(jobsAsyncActions.getJob(params));
  }, []);
  if (!job) {
    return <Spinner></Spinner>;
  }
  return <JobCard job={job}></JobCard>;
}
