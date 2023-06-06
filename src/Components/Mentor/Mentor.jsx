import React from "react";
import "./Mentor.css";
import Landing from "./Landing/Landing";
import MentorProfiles from "../MentorProfiles/MentorProfiles";

export default function Mentor(){
    return (
        <div className="mentor">
            <div className="landing">
                <Landing/>
            </div>
            <div className="mentor-header">
                <h1>Our Mentors</h1>
            </div>
            <div className="mentor-profile">
                <MentorProfiles/>
            </div>
        </div>
        // </div>
       

    )
}