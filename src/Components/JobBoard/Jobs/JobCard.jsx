import React from "react";
import JobCardContent from "./JobCardContent";

export default function JobCard(props){
    return (
        <div className="job-card">
            <JobCardContent 
                image= {props.image}
                title= {props.title}
                company= {props.company}
                description= {props.description}
            />
        </div>
    )
}