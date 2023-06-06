import React from "react";
import Card  from "./Card/Card";

export default function MentorProfiles(){
    return (
        <div className="card-container">
            <Card 
            name="Lindsey Clinton" 
            company="Google" 
            jobTitle="Junior Software Engineer" 
            areasOfDiscussion="Resume Review/Tips, Interview Practice/Tips, Networking/Job Search Tips, Internship/1st Job Success Advice, Explore Career/Interest Options, Share Personal Experience as Woman in Tech" 
            techInterests="Backend Dev, Cloud Computing, IoT, Software Engineering" 
            email="aimen.moten@gmail.com" 
            linkedIn="https://www.linkedin.com/in/aimen-moten/"/>
            <Card
                name="Lindsey Clinton" 
                company="Google" 
                jobTitle="Junior Software Engineer" 
                areasOfDiscussion="Resume Review/Tips, Interview Practice/Tips, Networking/Job Search Tips, Internship/1st Job Success Advice, Explore Career/Interest Options, Share Personal Experience as Woman in Tech" 
                techInterests="Backend Dev, Cloud Computing, IoT, Software Engineering" 
                email="aimen.moten@gmail.com" 
                linkedIn="https://www.linkedin.com/in/aimen-moten/"
            />
            <Card/>
            <Card/>
        </div>
    )
}