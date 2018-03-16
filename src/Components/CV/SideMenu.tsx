import * as React from "react";
import { Person } from "../../Entities/Person";


class SideMenu extends React.Component<Person, Person> {
    constructor(person: Person) {
        super(person);
        this.state = person;
    }
    getJobTitles(jobTitles: string[]) {
        return jobTitles.map(jobTitle => <span key={jobTitle}>{jobTitle}</span>).join("/");
    }
    public render() {  
        return (
            <div>
                <div className="side-menu-open hidden-sm hidden-xs">
                    <a href="#" className="btn btn-default side-menu-button">
                        <i className="fa fa-bars"/> MENU
                    </a>
                </div>

                <div className="side-menu">
                    <span id="side-menu-close">
                        <i className="fa fa-times"/>
                    </span>

                    <div className="side-menu-name">
                        <span>{this.state.forename}</span>
                        <strong>{this.state.surname}</strong>
                    </div>

                    <p className="side-menu-job">
                        {this.getJobTitles(this.state.jobTitles)}
                    </p>

                    <nav id="side-menu" className="side-menu-este">
                        <ul className="nav side-menu-nav">
                        <li><a href="#intro"><i className="fa fa-angle-right"/> Intro</a></li>
                        <li><a href="#education"><i className="fa fa-angle-right"/> Education</a></li>
                        <li><a href="#works"><i className="fa fa-angle-right"/> Work Experience</a></li>
                        {/*<li><a href="#skills"><i className="fa fa-angle-right"></i> Skills</a></li>
                        <li><a href="#interests"><i className="fa fa-angle-right"></i> Interests</a></li>
                        <li><a href="#portfolio"><i className="fa fa-angle-right"></i> Portfolio</a></li>
                        <li><a href="#contact"><i className="fa fa-angle-right"></i> Contact</a></li>*/}
                        </ul>
                    </nav>

                    <div className="side-menu-buttons">
                        <a href="/content/201706/CV Christos Talagozis (English).pdf" className="btn btn-side-menu">
                            <i className="fa fa-download"/> Download my resume
                        </a>
                        {/*
                        <a href="#" className="btn btn-side-menu">
                            <i className="fa fa-envelope-o"/> Send me a message
                        </a>
                        */}
                    </div>
                </div>
            </div>
        );
    }
}
  
export default SideMenu;

