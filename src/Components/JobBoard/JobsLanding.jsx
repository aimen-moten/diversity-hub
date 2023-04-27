import React from "react";
import coworkers from "./coworkers.jpeg";
import "./JobBoard.css"

export default function JobsLanding(){
    return (
        <div className="about-div">
        <div className="left-item-jobsLanding">
            <h1 className="about-title">Our Job Board</h1>
            <p className="about-text-jobsLanding">
                We have the pleasure of collaborating with a multitude of businesses and individuals who are dedicated to supporting and championing the Diversity Hub community. Our team is thrilled to have such enthusiastic partners who share our passion for promoting diversity and inclusion. Together, we are committed to creating a welcoming and inclusive environment that empowers individuals from all walks of life to thrive and succeed. We are truly grateful for the support of our partners, and we look forward to continuing to work alongside them to make a meaningful impact in our community.
            </p>
            <div className=' h-[80%] w-[20%] hover:bg-[#203165] rounded-lg bg-[royalblue] flex justify-center font-medium text-lg text-white items-center cursor-pointer select-none'>Join Us</div>
        </div>
        </div>
    )
}