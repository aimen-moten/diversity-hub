import React from "react";
import ImgMentor from "./ImgMentor";
import CardContent from "./CardContent";

export default function Card(){
    return (
        <div className="card">
            <ImgMentor/>
            <CardContent 
            name="Lindsey Clinton" 
            company="Google" 
            jobTitle="Junior Software Engineer" 
            areasOfDiscussion="Resume Review/Tips, Interview Practice/Tips, Networking/Job Search Tips, Internship/1st Job Success Advice, Explore Career/Interest Options, Share Personal Experience as Woman in Tech" 
            techInterests="Backend Dev, Cloud Computing, IoT, Software Engineering" 
            email="aimen.moten@gmail.com" 
            linkedIn="https://www.linkedin.com/in/aimen-moten/"/>
        </div>
    )
}