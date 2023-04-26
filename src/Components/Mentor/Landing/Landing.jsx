import React from "react";
import Testimonial from "./Testimonial";
import ImgDEI from "./ImgDEI";
import "../Mentor.css"

export default function Landing(){
    return (
        <div className="container">
            <Testimonial className="left-item"/>
            <ImgDEI className="right-item" />
        </div>
    )
}