import * as React from "react";
import { Person } from "../../Entities/Person";


class ContentProfileInfo extends React.Component<Person, Person> {
    constructor(person: Person) {
        super(person);
        this.state = person;
    }
    public render() {  
        return (
            <section className="timeline profile-infos">

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
                        <h2 className="section-title">Profile</h2>
                    </div>
                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"/>
                </div>

                <div className="line row">
                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"/>
                    <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point"/>
                    <div className="col-md-8 content-wrap bg1">
                        <div className="line-content">
                        <h3 className="section-item-title-1">Full Name</h3>
                        <p>{this.state.fullName}</p>
                        </div>
                    </div>
                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"/>
                </div>

                <div className="line row">
                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"/>
                    <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point "/>
                    <div className="col-md-8 content-wrap bg1">
                        <div className="line-content">
                        <h3 className="section-item-title-1">Nationality</h3>
                        <p>{this.state.nationality}</p>
                        </div>
                    </div>
                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"/>
                </div>

                <div className="line row">
                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"/>
                    <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point "/>
                    <div className="col-md-8 content-wrap bg1">
                        <div className="line-content">
                            <h3 className="section-item-title-1">Born</h3>
                            <p>
                                {new Intl.DateTimeFormat("en-GB", { 
                                    year: "numeric", 
                                    month: "short", 
                                    day: "2-digit" 
                                }).format(new Date(this.state.dob))} - {this.state.pob}
                            </p>
                        </div>
                    </div>
                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"/>
                </div>
    
                <div className="line row">
                    {/*
                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                    <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point "></div>
                    <div className="col-md-8 content-wrap bg1">
                        <div className="line-content">
                        <h3 className="section-item-title-1">Address</h3>
                        <p>@Model.address</p>
                        </div>
                    </div>
                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                    */}
                </div>
    
                <div className="line row">
                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"/>
                    <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point"/>
                    <div className="col-md-8 content-wrap bg1">
                        <div className="line-content">
                            <h3 className="section-item-title-1">Email</h3>
                            <p>{this.state.email}</p>
                        </div>
                    </div>
                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"/>
                </div>

                <div className="line row">
                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"/>
                    <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point"/>
                    <div className="col-md-8 content-wrap bg1">
                        <div className="line-content">
                        <h3 className="section-item-title-1">Find Me On</h3>
                            <a href={this.state.linkedinLink} className="btn btn-default" target="_blank">
                                <i className="fa fa-linkedin"/>
                            </a>
                            <a href={this.state.githubLink} className="btn btn-default" target="_blank">
                                <i className="fa fa-github"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"/>
                </div>

            </section>
        );
    }
}
  
export default ContentProfileInfo;

