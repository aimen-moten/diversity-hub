import React from "react";
import JobCard from "./JobCard";

export default function Jobs(){
    return (
        <div className="job-card-container">
            <JobCard 
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" 
                title="Front-end Developer" 
                company="Google" 
                description="Lorem ipsum"
            />
            <JobCard/>
            <JobCard/>
            <JobCard/>
        </div>
    )
}