import * as React from "react";
import { Interest } from "../../Entities/Interest";


class ContentInterest extends React.Component<Interest[], Interest[]> {
    constructor(interests: Interest[]) {
        super(interests);
        this.state = interests;
    }
    public render() {
        return (
            <section className="timeline" id="interests">

                <div className="line row timeline-margin">
                    <div className="content-wrap">
                        <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" />
                        <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height" />
                        <div className="col-md-9 bg1 full-height" />
                    </div>
                </div>

                <div className="line row">
                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" />
                    <div className="col-md-2 timeline-progress hidden-sm hidden-xs timeline-title full-height" />

                    <div className="col-md-8 content-wrap bg1">

                        <h2 className="section-title">Interests</h2>

                    </div>

                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" />
                </div>

                <div className="line row">
                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" />
                    <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point " />

                    <div className="col-md-8 content-wrap bg1">
                        <div className="line-content">
                            <h3 className="section-item-title-1">Art</h3>

                            <p>Praesent tellus ligula, tincidunt et fringilla vel, tincidunt ut dui.
                            Nulla feugiat, lacus ac malesuada lobortis,
                                    elit nunc congue nunc, vel imperdiet lorem leo a lectus.</p>
                        </div>
                    </div>

                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" />
                </div>

                <div className="line row">
                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" />
                    <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point " />

                    <div className="col-md-8 content-wrap bg1">
                        <div className="line-content">
                            <h3 className="section-item-title-1">Games</h3>

                            <p>Praesent tellus ligula, tincidunt et fringilla vel, tincidunt ut dui.
                            Nulla feugiat, lacus ac malesuada lobortis,
                                    elit nunc congue nunc, vel imperdiet lorem leo a lectus.</p>
                        </div>
                    </div>

                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" />
                </div>

                <div className="line row">
                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" />
                    <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point " />

                    <div className="col-md-8 content-wrap bg1">
                        <div className="line-content">
                            <h3 className="section-item-title-1">Books</h3>

                            <p>Praesent tellus ligula, tincidunt et fringilla vel, tincidunt ut dui.
                            Nulla feugiat, lacus ac malesuada lobortis, elit nunc congue nunc,
                                    vel imperdiet lorem leo a lectus.</p>
                        </div>
                    </div>

                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" />
                </div>
            </section>
        );
    }
}

export default ContentInterest;

