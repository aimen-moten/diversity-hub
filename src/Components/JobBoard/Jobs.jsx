import React from "react";
import "./JobBoard.css"
import JobCard from "./JobCard";

export default function Jobs(){
   return (<div className="job-listing">
      <h1 className="job-listing-header">Job Listings</h1>
        <div className="job-cards">
            <JobCard image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" title="Front-end Developer" company="Google" description="Lorem ipsum" />
            <JobCard image="https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg" title="Front-end Developer" company="Google" description="Lorem ipsum" />
            <JobCard image="https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg" title="Front-end Developer" company="Google" description="Lorem ipsum" />
        </div>
    </div>)
}