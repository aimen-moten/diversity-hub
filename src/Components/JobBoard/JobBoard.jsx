import React from "react";
import JobsLanding from "./JobsLanding";
import Jobs from "./Jobs/Jobs";
import "./Jobs/JobCard.css";

export default function JobBoard(){
    return (
        <div>
            <JobsLanding/>
            <div>
                <Jobs />
            </div>
        </div>
    )
}