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
            {/* <div className=' h-[60vh] w-[100%] bg-blue-50 flex flex-col'>
                    <div className=' h-[40%] w-[100%] flex justify-center items-center  text-lg font-sans font-bold'>
                        Where our recuriters come from
                    </div> */}

            <div className="mentor-profile">
                <MentorProfiles/>
            </div>
        </div>
        // </div>
       

    )
}