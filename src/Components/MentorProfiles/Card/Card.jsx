import React from "react";
import ImgMentor from "./ImgMentor";
import CardContent from "./CardContent";

export default function Card(props){
    return (
        <div className="card">
            {/* <ImgMentor/> */}
            <CardContent
            image= {props.image} 
            name={props.name} 
            company={props.company} 
            jobTitle={props.jobTitle} 
            areasOfDiscussion={props.areasOfDiscussion} 
            techInterests={props.techInterests}
            email={props.email} 
            linkedIn={props.linkedIn}/>
        </div>
    )
}