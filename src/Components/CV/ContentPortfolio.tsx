import * as React from "react";
import { Portfolio } from "../../Entities/Portfolio";


class ContentPortfolio extends React.Component<Portfolio[], Portfolio[]> {
    constructor(portfolios: Portfolio[]) {
        super(portfolios);
        this.state = portfolios;
    }
    public render() {
        return (
            <section className="timeline portfolio" id="portfolio">

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
                        <h2 className="section-title">Portfólio</h2>
                    </div>
                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" />
                </div>

                <div className="line row">
                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs" />
                    <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point " />
                    <div className="col-md-8 content-wrap bg1">
                        <div className="line-content">
                            <h3 className="section-item-title-1">Some Works</h3>
                            <div className="portfolio-itens clearfix">

                                <div className="portfolio-item">
                                    <a href="img/portfolio-item-zoom.jpg" title="Lorem ipsum dolor sit amet." className="nivobox" data-lightbox-gallery="portfolio">
                                        <div className="hover">
                                            <p className="zoomi">
                                                <i className="fa fa-search" /></p>
                                            <p className="portfolio-item-title"><strong>John"s Rex</strong><br /> Business Card</p>
                                        </div>
                                        <div className="hover-bg-wrapper">
                                            <div className="hover-bg" />
                                        </div>
                                        <div className="portfolio-item-thumbnail">
                                            <img src="img/portfolio-item-thumb.jpg" alt="" />
                                        </div>
                                    </a>
                                </div>

                                <div className="portfolio-item">
                                    <a href="img/portfolio-item-zoom.jpg" title="Lorem ipsum dolor sit amet." className="nivobox" data-lightbox-gallery="portfolio">
                                        <div className="hover">
                                            <p className="zoomi">
                                                <i className="fa fa-search" />
                                            </p>
                                            <p className="portfolio-item-title">
                                                <strong>John"s Rex</strong>
                                                <br /> Website
                                    </p>
                                        </div>
                                        <div className="hover-bg-wrapper">
                                            <div className="hover-bg" />
                                        </div>
                                        <div className="portfolio-item-thumbnail">
                                            <img src="img/portfolio-item-thumb.jpg" alt="" />
                                        </div>
                                    </a>
                                </div>

                                <div className="portfolio-item">
                                    <a href="img/portfolio-item-zoom.jpg" title="Lorem ipsum dolor sit amet." className="nivobox" data-lightbox-gallery="portfolio">
                                        <div className="hover">
                                            <p className="zoomi">
                                                <i className="fa fa-search" />
                                            </p>
                                            <p className="portfolio-item-title">
                                                <strong>Spetacular</strong>
                                                <br />Shirt Design
                                    </p>
                                        </div>
                                        <div className="hover-bg-wrapper">
                                            <div className="hover-bg" />
                                        </div>
                                        <div className="portfolio-item-thumbnail">
                                            <img src="img/portfolio-item-thumb.jpg" alt="" />
                                        </div>
                                    </a>
                                </div>

                                <div className="portfolio-item">
                                    <a href="img/portfolio-item-zoom.jpg" title="Lorem ipsum dolor sit amet." className="nivobox" data-lightbox-gallery="portfolio">
                                        <div className="hover">
                                            <p className="zoomi"><i className="fa fa-search" /></p>
                                            <p className="portfolio-item-title"><strong>Mr. Chicken</strong><br /> Website</p>
                                        </div>
                                        <div className="hover-bg-wrapper">
                                            <div className="hover-bg" />
                                        </div>
                                        <div className="portfolio-item-thumbnail">
                                            <img src="img/portfolio-item-thumb.jpg" alt="" />
                                        </div>
                                    </a>
                                </div>

                                <div className="portfolio-item">
                                    <a href="img/portfolio-item-zoom.jpg" title="Lorem ipsum dolor sit amet." className="nivobox" data-lightbox-gallery="portfolio">
                                        <div className="hover">
                                            <p className="zoomi"><i className="fa fa-search" /></p>
                                            <p className="portfolio-item-title"><strong>Super Lab</strong><br /> Website</p>
                                        </div>
                                        <div className="hover-bg-wrapper">
                                            <div className="hover-bg" />
                                        </div>
                                        <div className="portfolio-item-thumbnail">
                                            <img src="img/portfolio-item-thumb.jpg" alt="" />
                                        </div>
                                    </a>
                                </div>

                                <div className="portfolio-item">
                                    <a href="img/portfolio-item-zoom.jpg" title="Lorem ipsum dolor sit amet." className="nivobox" data-lightbox-gallery="portfolio">
                                        <div className="hover">
                                            <p className="zoomi">
                                                <i className="fa fa-search" /></p>
                                            <p className="portfolio-item-title">
                                                <strong>Awesome</strong>
                                                <br /> Branding
                                            </p>
                                        </div>
                                        <div className="hover-bg-wrapper">
                                            <div className="hover-bg" />
                                        </div>
                                        <div className="portfolio-item-thumbnail">
                                            <img src="img/portfolio-item-thumb.jpg" alt="" />
                                        </div>
                                    </a>
                                </div>

                                <div className="portfolio-item">
                                    <a href="img/portfolio-item-zoom.jpg" title="Lorem ipsum dolor sit amet." className="nivobox" data-lightbox-gallery="portfolio">
                                        <div className="hover">
                                            <p className="zoomi">
                                                <i className="fa fa-search" /></p>
                                            <p className="portfolio-item-title">
                                                <strong>Petrelli's</strong>
                                                <br /> Business Card
                                            </p>
                                        </div>
                                        <div className="hover-bg-wrapper">
                                            <div className="hover-bg" />
                                        </div>
                                        <div className="portfolio-item-thumbnail">
                                            <img src="img/portfolio-item-thumb.jpg" alt="" />
                                        </div>
                                    </a>
                                </div>

                                <div className="portfolio-item">
                                    <a href="img/portfolio-item-zoom.jpg" title="Lorem ipsum dolor sit amet." className="nivobox" data-lightbox-gallery="portfolio">
                                        <div className="hover">
                                            <p className="zoomi">
                                                <i className="fa fa-search" /></p>
                                            <p className="portfolio-item-title">
                                                <strong>Guia D</strong>
                                                <br /> App Design
                                            </p>
                                        </div>
                                        <div className="hover-bg-wrapper">
                                            <div className="hover-bg" />
                                        </div>
                                        <div className="portfolio-item-thumbnail">
                                            <img src="img/portfolio-item-thumb.jpg" alt="" />
                                        </div>
                                    </a>
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

export default ContentPortfolio;