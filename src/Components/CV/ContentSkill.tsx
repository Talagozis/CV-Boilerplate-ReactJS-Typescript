import * as React from "react";
import { Skill } from "../../Entities/Skill";


class ContentSkill extends React.Component<Skill[], Skill[]> {
    constructor(skills: Skill[]) {
        super(skills);
        this.state = skills;
    }
    public render() {  
        return (
            <section className="timeline skills" id="skills">

                <div className="line row timeline-margin">
                    <div className="content-wrap">
                        <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"/>
                        <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height"/>
                        <div className="col-md-9 bg1 full-height"/>
                    </div>
                </div>

                <div className="line row">
                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"/>
                    <div className="col-md-2 timeline-progress hidden-sm hidden-xs timeline-title full-height"/>

                    <div className="col-md-8 content-wrap bg1">
                        <h2 className="section-title">Skills</h2>
                    </div>
                    
                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"/>
                </div>

                <div className="line row">
                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"/>
                <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point "/>

                <div className="col-md-8 content-wrap bg1">
                    <div className="line-content">
                        <h3 className="section-item-title-1">Professional Skills</h3>
                        <ul className="skills-list">
                            <li>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" data-percent="70%" style={{"width": "70%"}}>
                                        <span className="sr-only">70% Complete</span>
                                    </div>
                                    <span className="progress-type">Comunication</span>
                                    <span className="progress-completed">70%</span>
                                </div>
                            </li>
                            <li>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-2" role="progressbar" data-percent="90%" style={{"width": "90%"}}>
                                        <span className="sr-only">90% Complete</span>
                                    </div>
                                    <span className="progress-type">Leadership</span>
                                    <span className="progress-completed">90%</span>
                                </div>
                            </li>
                            <li>
                                <div className="progress" title="Doing my best!">
                                    <div className="progress-bar progress-bar-3" role="progressbar" data-percent="85%" style={{"width": "85%;"}}>
                                        <span className="sr-only">85% Complete</span>
                                    </div>
                                    <span className="progress-type">Confidence</span>
                                    <span className="progress-completed">85%</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"/></div>
                
                <div className="line row">
                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"/>
                    <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point "/>

                    <div className="col-md-8 content-wrap bg1">
                        <div className="line-content">
                            <h3 className="section-item-title-1">Software Skills</h3>

                            <ul className="skills-list">
                                <li>
                                    <div className="progress">
                                        <div className="progress-bar" data-percent="85%" role="progressbar" style={{"width": "85%;"}}>
                                            <span className="sr-only">85% Complete</span>
                                        </div>
                                        <span className="progress-type">Adobe Photoshop</span>
                                        <span className="progress-completed">85%</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-2" data-percent="90%" role="progressbar" style={{"width": "90%;"}}>
                                            <span className="sr-only">90% Complete</span>
                                        </div>
                                        <span className="progress-type">Adobe Illustrator</span>
                                        <span className="progress-completed">90%</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-3" data-percent="40%" role="progressbar" style={{"width": "40%;"}}>
                                            <span className="sr-only">40% Complete</span>
                                        </div>
                                        <span className="progress-type">Adobe Fireworks</span>
                                        <span className="progress-completed">40%</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"/>
                </div>

                <div className="line row">
                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"/>
                    <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point "/>
                    <div className="col-md-8 content-wrap bg1">
                        <div className="line-content">
                            <h3 className="section-item-title-1">Code Skills</h3>
                            <ul className="skills-list">
                                <li>
                                <div className="progress">
                                    <div className="progress-bar" data-percent="90%" role="progressbar" style={{"width": "90%;"}}>
                                        <span className="sr-only">90% Complete</span>
                                    </div>
                                    <span className="progress-type">HTML5 / CSS3</span>
                                    <span className="progress-completed">90%</span>
                                </div>
                                </li>
                                <li>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-2" data-percent="60%" role="progressbar" style={{"width": "60%;"}}>
                                        <span className="sr-only">60% Complete</span>
                                    </div>
                                    <span className="progress-type">Javascript</span>
                                    <span className="progress-completed">60%</span>
                                </div>
                                </li>
                                <li>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-3" data-percent="40%" role="progressbar" style={{"width": "40%;"}}>
                                        <span className="sr-only">40% Complete</span>
                                    </div>
                                    <span className="progress-type">PHP</span>
                                    <span className="progress-completed">40%</span>
                                </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"/>

                </div>
            
            </section>
        );
    }
}
  
export default ContentSkill;

