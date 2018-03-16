import * as React from "react";
import { Education } from "../../Entities/Education";


class ContentEducation extends React.Component<Education[], Education[]> {
    constructor(educations: Education[]) {
        super(educations);
        this.state = educations;
    }
    public render() {
        return (
            <section className="timeline education" id="education">

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
                        <h2 className="section-title">Education</h2>
                    </div>
                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"/>
                </div>

                {this.state.map(education =>
                    <div className="line row" key={education.title}>
                        <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"/>
                        <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-education"/>
                        <div className="col-md-8 content-wrap bg1">
                        <div className="line-content line-content-education">
                            <h3 className="section-item-title-1">{education.title}</h3>
                            <h4 className="graduation-time">
                                <i className="fa fa-university"/>
                                <span>{education.university} ({education.courseYears} Years Course)</span>
                                <span className="graduation-date">
                                    Graduation                                         
                                    {new Intl.DateTimeFormat("en-GB", { 
                                        month: "long",
                                        year: "numeric", 
                                    }).format(new Date(education.graduationDate))}
                                </span>
                            </h4>
                            <div className="graduation-description">
                                <p>
                                    <span>Thesis:</span> 
                                    <strong>{education.thesisTitle}</strong>
                                </p>
                                <p>Projects:</p>
                                <ul className="" style={{"padding-left": "40px", "margin-bottom": "20px"}}>
                                    {education.projects.map(project =>
                                        <li key={project.name}>{project.name}</li>
                                    )}
                                </ul>
                                <p>Main courses:</p>
                                <ul className="" style={{"padding-left": "40px", "margin-bottom": "20px"}}>
                                    {education.mainCourses.map(mainCourse =>
                                        <li key={mainCourse.name}>{mainCourse.name}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"/>
                    </div>
                )}
                
            </section>
        );
    }
}
  
export default ContentEducation;

