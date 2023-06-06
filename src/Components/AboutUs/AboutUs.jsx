import React from "react";
import About from "./About";
import CoreValues from "./CoreValues";
import Mission from "./Mission";
import "./About.css";
import Footer from "../Footer";
export default function AboutUs(){
    return (
        <div>
            <About/>
            <Mission/>
            <CoreValues/>
            <Footer/>
        </div>
    )
}