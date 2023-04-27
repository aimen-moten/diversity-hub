import React from "react";
import deiAbout from "./deiAbout.jpeg";

export default function About(){
    return (
        <div className="about-div">
        <div className="left-items">
            <h1 className="about-title">About Diversity Hub</h1>
            <p className="about-text">
                We empower underrepresented individuals in tech with mentorship, community, and job opportunities. Join us to break down barriers and build a more inclusive industry.
            </p>
            <div className=' h-[80%] w-[40%] hover:bg-[#203165] rounded-lg bg-[royalblue] flex justify-center font-medium text-lg text-white items-center cursor-pointer select-none'>Join Us</div>
        </div>
            <div className="right-items">
                <img src={deiAbout}></img>
            </div>
        </div>
    )
}