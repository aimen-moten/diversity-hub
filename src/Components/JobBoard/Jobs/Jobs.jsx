import React from "react";
import JobCard from "./JobCard";

export default function Jobs(){
    return (
        <div>
            <h1 className="job-section-title">Current Openings</h1>
            <div className="job-card-container">
            <JobCard 
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png" 
                title="Front-end Developer" 
                company="Google" 
                description="As a Front-End Engineer, you will be responsible for building and maintaining the user interface of our web applications. You will work closely with the design and development teams to translate design concepts into functional and visually appealing user interfaces. Your focus will be on creating responsive and accessible web pages that provide a seamless user experience."
            />
            <JobCard 
                image="https://tse2.mm.bing.net/th?id=OIP.PWoq1WvDQDxc_MPv4Jt0GwHaHa&pid=Api&P=0"
                title="Explore Intern" 
                company="Microsoft" 
                description="Microsoft's Explore program is a 12-week summer internship for college freshmen and sophomores, offering rotation across software engineering roles. It provides hands-on experience with various programming languages and tools while fostering learning, mentoring, and networking opportunities to encourage pursuit of technical degrees."
            />
            <JobCard
                image="https://logos-download.com/wp-content/uploads/2016/12/Zillow_logo_blue.png"
                title="Software Engineer" 
                company="Zillow" 
                description="We are seeking a highly skilled Software Engineer to design, develop and implement software solutions for our company. As a Software Engineer, you will collaborate with cross-functional teams to deliver high-quality software products, from concept to deployment. Your responsibilities will include writing clean and efficient code, debugging and troubleshooting, and collaborating with other teams to develop new features and enhance existing ones."
            />
            <JobCard
                image="https://venturebeat.com/wp-content/uploads/2016/06/netflix-logo.png?fit=2048%2C2048&strip=all"
                title="UX Designer" 
                company="Netflix" 
                description="We are seeking a UX Designer to join our team. As a UX Designer, you will be responsible for creating intuitive and visually appealing interfaces that deliver a seamless user experience. Your focus will be on designing user interfaces, wireframes, and prototypes that align with our brand and business goals."
            />
            <JobCard 
                image="http://lofrev.net/wp-content/photos/2016/06/amazon-logo-1.png"
                title="Back-end Developement Intern" 
                company="Amazon" 
                description="We are seeking a highly motivated and passionate Backend Development Intern to join our team. As a Backend Development Intern, you will work with our experienced developers to design, develop, and maintain the backend of our web applications. You will gain hands-on experience in building scalable and reliable server-side solutions while contributing to the development of our products."
                />
        </div>
        </div>
        
    )
}