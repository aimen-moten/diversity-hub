import React from "react";
import "../Mentor/Mentor.css"

export default function CardContent(props){
    return (
        <div className="job-card">
            <img src={props.image} className="" />
            <p className="job-card-title"><b>{props.title}</b></p>
            <div className="job-card-description">
                <p><b>Company: </b>{props.company}</p>
                <p><b>Description </b>{props.description}</p>
                <div className=' h-[10vh] w-[100%]  rounded-xl flex justify-around items-center mt-5'>
                        <div className=' h-[80%] w-[45%] hover:bg-[#203165] rounded-lg bg-[royalblue] flex justify-center font-medium text-sm text-white items-center cursor-pointer select-none'><a href="https://www.linkedin.com/feed/">Apply Now</a></div>
                </div>
            </div>
        </div>
    )
}