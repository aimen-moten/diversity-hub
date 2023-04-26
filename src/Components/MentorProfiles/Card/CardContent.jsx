import React from "react";

export default function CardContent(props){
    return (
        <div className="card-body">
            <p className="card-title"><b>{props.name}</b></p>
            <div>
                <p><b>Company: </b>{props.company}</p>
                <p><b>Job Title: </b>{props.jobTitle}</p>
                <p><b>Areas of Discussion with Mentee: </b>{props.areasOfDiscussion}</p>
                <p><b>Technical Interests: </b>{props.techInterests}</p>
                <div className=' h-[10vh] w-[100%]  rounded-xl flex justify-around items-center mt-5'>
                        <div className=' h-[80%] w-[45%] hover:bg-[#203165] rounded-lg bg-[royalblue] flex justify-center font-medium text-sm text-white items-center cursor-pointer select-none'><a href={`mailto:${props.email}`}>Request Mentorship</a></div>
                        <div className=' h-[80%] w-[45%] hover:bg-[#203165] rounded-lg bg-[royalblue] flex justify-center font-medium text-sm text-white items-center cursor-pointer select-none'><a href="https://www.linkedin.com/feed/">LinkedIn</a></div>
                </div>
            </div>
        </div>
    )
}