import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { _id, title, company, applicationDeadline } = useLoaderData();

  return (
    <div>
      <h2>Job Details for : {title}</h2>
      <p>Company : {company}</p>
      <p>Deadline : {applicationDeadline}</p>
      <Link to={`/jobApply/${_id}`}>
        <button className="btn btn-primary">Apply Now</button>
      </Link>
    </div>
  );
};

export default JobDetails;
