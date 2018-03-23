import * as React from "react";
import { Person } from "../../Entities/Person";
import ContentEducation from "./ContentEducation";
import ContentWorkExperience from "./ContentWorkExperience";
import ContentProfileInfo from "./ContentProfileInfo";
// import ContentSkill from "./ContentSkill";
// import ContentInterest from "./ContentInterest";
// import ContentPortfolio from "./ContentPortfolio";
import ContentContact from "./ContentContact";

const imageSrc = require("../../Asserts/img/cv-avatar.jpg");

class Content extends React.Component<Person, Person> {
    constructor(person: Person) {
        super(person);
        this.state = person;
    }
    getJobTitles(jobTitles: string[]) {
        return jobTitles.map(jobTitle => jobTitle).join(" / ");
    }
    public render() {  
        return (
            <section id="content-body" className="container animated">
                <div className="row" id="intro">

                    <div className="col-md-10 col-sm-10  col-md-offset-2 col-sm-offset-1 clearfix top-colors">
                        <div className="top-color top-color1"/>
                        <div className="top-color top-color2"/>
                        <div className="top-color top-color3"/>
                        <div className="top-color top-color1"/>
                        <div className="top-color top-color2"/>
                    </div>
                    
                    <div className="col-md-10 col-sm-10 col-md-offset-2 col-sm-offset-1 resume-container">
                    
                    <div className="row">
                        <div className="header-buttons col-md-10 col-md-offset-1">
                        <a href="/content/201706/CV Christos Talagozis (English).pdf" className="btn btn-default btn-top-resume">
                            <i className="fa fa-download"/>
                            <span className="btn-hide-text">Download my resume</span>
                        </a>
                        {/*
                        <a href="#" className="btn btn-default btn-top-message">
                            <i className="fa fa-envelope-o"/>
                            <span className="btn-hide-text">Send me a message</span>
                        </a>
                        */}
                        </div>
                    </div>

                    <div className="profile-intro row">

                        <div className="col-md-4 profile-col">
                            <div className="profile-pic">
                                <div className="profile-border">
                                    <img src={imageSrc} alt=""/>
                                </div>          
                            </div>
                        </div>
                
                        <div className="col-md-7">

                            <h1 className="intro-title1">Hi, i'm 
                                <span className="color1 bold">
                                    {this.state.fullName}!
                                </span>
                            </h1>

                            <h2 className="intro-title2">
                                {this.getJobTitles(this.state.jobTitles)}
                            </h2>

                            <p>
                                {/*
                                    <strong>Turpis, sit amet iaculis dui consectetur at.</strong> 
                                    Cras sagittis molestie orci. 
                                    <strong>Suspendisse ut laoreet mi</strong>. 
                                    Phasellus eu tortor vehicula, blandit enim eu, auctor massa. Nulla ultricies tortor dolor, sit amet suscipit enim 
                                    <strong>condimentum id</strong>. 
                                    Etiam eget iaculis tellus.  Varius sit amet.
                                */}
                                {this.state.description}
                            </p>

                        </div>

                    </div>

                    <div className="timeline-wrap">
                        <div className="timeline-bg">

                            <ContentProfileInfo {... this.state} />

                            <ContentEducation {... this.state.educations} />

                            <ContentWorkExperience {... this.state.workExperience} />

                            {/*
                            <ContentSkill {... this.state.skills} />

                            <ContentInterest {... this.state.interests} />

                            <ContentPortfolio {... this.state.portfolios} />          
                            */}
                            <ContentContact />


                            <section className="timeline profile-infos">

                                <div className="line row timeline-margin timeline-margin-big">
                                    <div className="content-wrap">
                                        <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"/>
                                        <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height"/>
                                        <div className="col-md-9 bg1 full-height"/>
                                    </div>
                                </div>
                                
                                <div className="line row line-thank-you">
                                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"/>
                                    <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point "/>
                                    <div className="col-md-8 content-wrap bg1">
                                        <div className="line-content">
                                        <h3 className="thank-you">Thank You!</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"/>
                                </div>
                            </section>

                        </div>
                    </div>

                    <footer id="footer" className="row">
                        <p className="quote">“Ideas are the beginning points of all fortunes”</p>
                        <p className="author">Napoleon Hill</p>
                    </footer>

                </div> 
            </div> 
            </section>
        );
    }
}
  
export default Content;