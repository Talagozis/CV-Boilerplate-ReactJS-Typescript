import * as React from "react";
import { WorkExperience } from "../../Entities/WorkExperience";


class ContentWorkExperience extends React.Component<WorkExperience[], WorkExperience[]> {
    constructor(workExperiences: WorkExperience[]) {
        super(workExperiences);
        this.state = workExperiences;
    }
    public render() {  
        return (
            <section className="timeline work-experience" id="works">

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
                                <h2 className="section-title">Work Experience</h2>
                            </div>
                            <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"/>
                        </div>
   
                        {this.state.map(workExperience => 
                            <div className="line row" key={workExperience.startDate.toString()}>
                                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"/>
                                <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-work "/>
                                <div className="col-md-8 content-wrap bg1">
                                    <div className="line-content line-content-workingExperience">
                                        <h3 className="section-item-title-1">{workExperience.companyName}</h3>
                                        <h4 className="job">
                                            <i className="fa fa-flag"/>
                                            <span>
                                                {workExperience.position} - 
                                            </span>                                            
                                            <span className="job-date">
                                                <span>
                                                    {new Intl.DateTimeFormat("en-GB", { 
                                                        month: "long",
                                                        year: "numeric", 
                                                    }).format(workExperience.startDate)}
                                                </span>
                                                - 
                                                <span>
                                                    {workExperience.endDate != null ? new Intl.DateTimeFormat("en-GB", { 
                                                        month: "long",
                                                        year: "numeric", 
                                                    }).format(workExperience.endDate) : "Current"}
                                                </span>
                                            </span>
                                        </h4>
                                        <div className="job-description">
                                            <p>@workExperience.description</p>
                                            <p>Projects:</p>
                                            <ul className="" style={{"padding-left": "40px", "margin-bottom": "20px"}}>
                                                {workExperience.projects.map(project =>
                                                    <li key={project.name}>{project.name}</li>
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
  
export default ContentWorkExperience;

