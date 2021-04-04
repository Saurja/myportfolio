import React, { Component } from 'react';

import '../styles/About.scss';

const plang = [
    { name: "C/C++"},
    { name: "Java"},
    { name: "OOPS"},
    { name: "HTML5 & CSS"},
    { name: "PHP"},
    { name: "BOOTSTRAP"},
    { name: "SQL"},
    { name: "DBMS"},
    { name: "NodeJs"},
    { name: "GIT & GITHUB"},
    { name: "UI/UX Design"},
    { name: "MS Office"},
]

const projects = [{
    name: 'Digital Wallet Web Application',
    text: 'Developed a prototype of a digital wallet is a software-based system that with the help of this application, a person can send and receive credit points to any user in the application.',
    link: "https://assets.website-files.com/5ef5c908f55bc9b2c48a5cc2/5f50d9811e955f59eababcf7_online-wallets-in-india.jpg"
}, {
    name: "CNN to classify 14 chest diseases from a chest X-Ray dataset",
    text: "The project is developed to classify a dataset (*Here NIH data set) into 14 different types of common chest diseases with the help of CNN, to reduce the cost and the time required to find the pulmonary diseases"
}, {
    name: "Covid 19 Detection Web App",
    text: "The project is developed to classify covid-19, made into a Web App that can be accessed by anywhere , to reduce the cost and the time required to detect Covid-19.",
    link: "https://raw.githubusercontent.com/Saurja/Covid-19_Disease_Diagnosis/main/Demo.jpg"
}, {
    name: "Covid 19 Dashboard",
    text: "The Coronavirus dashboard provides an overview of the 2019 Novel Coronavirus COVID-19. It shows countries affected by covid from the top to bottom.",
    link: "'https://github.com/Saurja/covid-dashboard'"
}]

function Lang(props) {
    return <div className = "Languages">{props.name}</div>
}

function Project(props) {
    return (
        <div className="post">
            <h1 class="post-title">{props.name}</h1>
            <p>{props.text}</p>
        </div>
    )
}

export class About extends Component {
    render() {
        return(
            <div>
            <div className="about">
                <h1>About Me</h1>
                <p>I am a Computer Science Major, who is passionate about starting projects in 
                    many fields of Web Development and Databases. I'm open minded to new technologies, 
                    but fullstack web development has grabbed my attention recently.Furthermore, 
                    I believe in teamwork, and I am responsible and dedicated to my work. </p>
                <p> I'm a hard worker, committed and self learner. </p>
                
            </div>
            <div className="about">
                <h1>Things I Know...</h1>
                    {plang.map(plang => <Lang name={plang.name}/>)}
            </div>
            <div className="about">
                <h1>Projects</h1>
                <div className="all-post">
                    {projects.map(projects => <Project name={projects.name} text={projects.text} link={projects.link}/>)}
                </div>
            </div>
            </div>
        )
    }
}