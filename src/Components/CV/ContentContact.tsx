import * as React from "react";


class ContentContact extends React.Component {
    public render() {
        return (
            <section className="timeline" id="contact">

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
                        <h2 className="section-title">Contact</h2>
                    </div>
                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" />
                </div>

                <div className="line row">
                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" />
                    <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-mail " />

                    <div className="col-md-8 content-wrap bg1">
                        <div className="line-content contact-content">
                            <h3 className="section-item-title-1">Send me a message</h3>
                            <div className="row">
                                <div className="col-md-8 contact-form-wrapper">
                                    <form id="contactForm" method="post" className="form" role="form">
                                        <div className="form-group">
                                            <input className="form-control required" id="name" name="name" placeholder="Name" type="text" required={true} />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control required" id="email" name="email" placeholder="Email" type="email" required={true} />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control required" id="subject" type="text" name="subject" placeholder="Subject" required={true} />
                                        </div>

                                        <div className="form-group">
                                            <textarea className="form-control required" id="message" name="message" placeholder="Message" rows={5} required={true} />
                                        </div>

                                        <div className="form-group">
                                            <input type="submit" className="btn btn-default form-send" value="Send!" />
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-4 contact-infos">
                                    <h4 className="contact-subtitle-1">Address</h4>
                                    <p>451 Lorem Ipsum, Austin - Texas - U.S.A</p>
                                    <h4 className="contact-subtitle-1">Phone</h4>
                                    <p>+61 3 8376 6284</p>
                                    <h4 className="contact-subtitle-1">Mail</h4>
                                    <p>john.Rex@dotrex.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" />
                </div>
            </section>
        );
    }
}

export default ContentContact;

