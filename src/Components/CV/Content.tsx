import * as React from "react";
import { Person } from "../../Entities/Person";
import ContentEducation from "./ContentEducation";
import ContentWorkExperience from "./ContentWorkExperience";
import ContentProfileInfo from "./ContentProfileInfo";


class PageLoader extends React.Component<Person, Person> {
    constructor(person: Person) {
        super(person);
        this.state = person;
    }
    getJobTitles(jobTitles: string[]) {
        return jobTitles.map(jobTitle => <span key={jobTitle}>{jobTitle}</span>).join("/");
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
                                    <img src="images/cv-avatar.jpg" alt=""/>
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

                            {/*}
                            <!-- ====>> SECTION: SKILLS <<====-->
                            <section className="timeline skills" id="skills">

                                <!-- VERTICAL MARGIN (necessary for the timeline effect) -->
                                <div className="line row timeline-margin">
                                <div className="content-wrap">
                                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                                    <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height"></div>
                                    <div className="col-md-9 bg1 full-height"></div>
                                </div>
                                </div>
                                <!-- /VERTICAL MARGIN -->

                                <!-- SECTION TITLE -->
                                <div className="line row">
                                <!-- VERTICAL MARGIN (necessary for the timeline effect) -->
                                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                                <div className="col-md-2 timeline-progress hidden-sm hidden-xs timeline-title full-height"></div>
                                <!-- /VERTICAL MARGIN (necessary for the timeline effect) -->
                                <!-- Item Content -->
                                <div className="col-md-8 content-wrap bg1">
                                    <!-- Section title -->
                                    <h2 className="section-title">Skills</h2>
                                    <!-- /Section title -->
                                </div>
                                <!-- /Item Content -->
                                <!-- Margin Collum-->
                                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                                <!-- /Margin Collum-->
                                </div>
                                <!-- /SECTION TITLE -->

                                <!-- SECTION ITEM -->
                                <div className="line row">
                                <!-- Margin Collums (necessary for the timeline effect) -->
                                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                                <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point "></div>
                                <!-- / Margin Collums -->
                                <!-- Item Content -->
                                <div className="col-md-8 content-wrap bg1">
                                    <div className="line-content">
                                    <!-- Subtitle -->
                                    <h3 className="section-item-title-1">Professional Skills</h3>
                                    <!-- /Subtitle -->
                                    <!-- content -->
                                    <ul className="skills-list">
                                        <!-- item-list -->
                                        <li>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" data-percent="70%" style="width: 70%;">
                                                <span className="sr-only">70% Complete</span>
                                            </div>
                                            <span className="progress-type">Comunication</span>
                                            <span className="progress-completed">70%</span>
                                        </div>
                                        </li>
                                        <!-- /item list -->
                                        <!-- item-list -->
                                        <li>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-2" role="progressbar" data-percent="90%" style="width: 90%;">
                                                <span className="sr-only">90% Complete</span>
                                            </div>
                                            <span className="progress-type">Leadership</span>
                                            <span className="progress-completed">90%</span>
                                        </div>
                                        </li>
                                        <!-- /item list -->
                                        <!-- item-list -->
                                        <li>
                                        <div className="progress" title="Doing my best!">
                                            <div className="progress-bar progress-bar-3" role="progressbar" data-percent="85%" style="width: 85%;">
                                                <span className="sr-only">85% Complete</span>
                                            </div>
                                            <span className="progress-type">Confidence</span>
                                            <span className="progress-completed">85%</span>
                                        </div>
                                        </li>
                                        <!-- /item list -->
                                    </ul>
                                    <!-- /Content -->
                                    </div>
                                </div>
                                <!-- /Item Content -->
                                <!-- Margin Collum-->
                                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                                <!-- /Margin Collum-->
                                </div>
                                <!-- /SECTION ITEM -->
                                
                                <!-- SECTION ITEM -->
                                <div className="line row">
                                <!-- Margin Collums (necessary for the timeline effect) -->
                                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                                <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point "></div>
                                <!-- /Margin Collums -->
                                <!-- Item Content -->
                                <div className="col-md-8 content-wrap bg1">
                                    <div className="line-content">
                                    <!-- Subtitle -->
                                    <h3 className="section-item-title-1">Software Skills</h3>
                                    <!-- /Subtitle -->
                                    <!-- content -->
                                    <ul className="skills-list">
                                        <!-- item-list -->
                                        <li>
                                        <div className="progress">
                                            <div className="progress-bar" data-percent="85%" role="progressbar" style="width: 85%;">
                                                <span className="sr-only">85% Complete</span>
                                            </div>
                                            <span className="progress-type">Adobe Photoshop</span>
                                            <span className="progress-completed">85%</span>
                                        </div>
                                        </li>
                                        <!-- /item list -->
                                        <!-- item-list -->
                                        <li>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-2" data-percent="90%" role="progressbar" style="width: 90%;">
                                                <span className="sr-only">90% Complete</span>
                                            </div>
                                            <span className="progress-type">Adobe Illustrator</span>
                                            <span className="progress-completed">90%</span>
                                        </div>
                                        </li>
                                        <!-- /item list -->
                                        <!-- item-list -->
                                        <li>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-3" data-percent="40%" role="progressbar" style="width: 40%;">
                                                <span className="sr-only">40% Complete</span>
                                            </div>
                                            <span className="progress-type">Adobe Fireworks</span>
                                            <span className="progress-completed">40%</span>
                                        </div>
                                        </li>
                                        <!-- /item list -->
                                    </ul>
                                    <!-- /Content -->
                                    </div>
                                </div>
                                <!-- /Item Content -->
                                <!-- Margin Collum-->
                                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                                <!-- /Margin Collum-->
                                </div>
                                <!-- /SECTION ITEM -->   

                                <!-- SECTION ITEM -->
                                <div className="line row">
                                <!-- Margin Collums (necessary for the timeline effect) -->
                                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                                <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point "></div>
                                <!-- /Margin Collums (necessary for the timeline effect) -->
                                <!-- Item Content -->
                                <div className="col-md-8 content-wrap bg1">
                                    <div className="line-content">
                                    <!-- Subtitle -->
                                    <h3 className="section-item-title-1">Code Skills</h3>
                                    <!-- /Subtitle -->
                                    <!-- content -->
                                    <ul className="skills-list">
                                        <!-- item-list -->
                                        <li>
                                        <div className="progress">
                                            <div className="progress-bar" data-percent="90%" role="progressbar" style="width: 90%;">
                                                <span className="sr-only">90% Complete</span>
                                            </div>
                                            <span className="progress-type">HTML5 / CSS3</span>
                                            <span className="progress-completed">90%</span>
                                        </div>
                                        </li>
                                        <!-- /item list -->
                                        <!-- item-list -->
                                        <li>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-2" data-percent="60%" role="progressbar" style="width: 60%;">
                                                <span className="sr-only">60% Complete</span>
                                            </div>
                                            <span className="progress-type">Javascript</span>
                                            <span className="progress-completed">60%</span>
                                        </div>
                                        </li>
                                        <!-- /item list -->
                                        <!-- item-list -->
                                        <li>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-3" data-percent="40%" role="progressbar" style="width: 40%;">
                                                <span className="sr-only">40% Complete</span>
                                            </div>
                                            <span className="progress-type">PHP</span>
                                            <span className="progress-completed">40%</span>
                                        </div>
                                        </li>
                                        <!-- /item list -->
                                    </ul>
                                    <!-- /Content -->
                                    </div>
                                </div>
                                <!-- /Item Content -->
                                <!-- Margin Collum-->
                                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                                <!-- /Margin Collum-->
                                </div>
                                <!-- /SECTION ITEM --> 
                            </section>
                            <!-- ==>> /SECTION: SKILLS -->

                            <!-- ====>> SECTION: INTERESTS <<====-->
                            <section className="timeline" id="interests">

                                <!-- VERTICAL MARGIN (necessary for the timeline effect) -->
                                <div className="line row timeline-margin">
                                <div className="content-wrap">
                                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                                    <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height"></div>
                                    <div className="col-md-9 bg1 full-height"></div>
                                </div>
                                </div>
                                <!-- /VERTICAL MARGIN -->

                                <!-- SECTION TITLE -->
                                <div className="line row">
                                <!-- Margin Collums (necessary for the timeline effect) -->
                                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                                <div className="col-md-2 timeline-progress hidden-sm hidden-xs timeline-title full-height"></div>
                                <!-- /Margin Collums -->
                                <!-- Item Content -->
                                <div className="col-md-8 content-wrap bg1">
                                    <!-- Section title -->
                                    <h2 className="section-title">Interests</h2>
                                    <!-- /Section title -->
                                </div>
                                <!-- /Item Content -->
                                <!-- Margin Collum-->
                                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                                <!-- /Margin Collum-->
                                </div>
                                <!-- /SECTION TITLE -->

                                <!-- SECTION ITEM -->
                                <div className="line row">
                                <!-- Margin Collums (necessary for the timeline effect) -->
                                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                                <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point "></div>
                                <!-- /Margin Collums -->
                                <!-- Item Content -->
                                <div className="col-md-8 content-wrap bg1">
                                    <div className="line-content">
                                    <!-- Subtitle -->
                                    <h3 className="section-item-title-1">Art</h3>
                                    <!-- /Subtitle -->
                                    <!-- content -->
                                    <p>Praesent tellus ligula, tincidunt et fringilla vel, tincidunt ut dui. 
                                    Nulla feugiat, lacus ac malesuada lobortis, 
                                    elit nunc congue nunc, vel imperdiet lorem leo a lectus.</p>
                                    <!-- /Content -->
                                    </div>
                                </div>
                                <!-- /Item Content -->
                                <!-- Margin Collum-->
                                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                                <!-- /Margin Collum-->
                                </div>
                                <!-- /SECTION ITEM -->
                                
                                <!-- SECTION ITEM -->
                                <div className="line row">
                                <!-- Margin Collums (necessary for the timeline effect) -->
                                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                                <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point "></div>
                                <!-- /Margin Collums -->
                                <!-- Item Content -->
                                <div className="col-md-8 content-wrap bg1">
                                    <div className="line-content">
                                    <!-- Subtitle -->
                                    <h3 className="section-item-title-1">Games</h3>
                                    <!-- /Subtitle -->
                                    <!-- content -->
                                    <p>Praesent tellus ligula, tincidunt et fringilla vel, tincidunt ut dui. 
                                    Nulla feugiat, lacus ac malesuada lobortis, 
                                    elit nunc congue nunc, vel imperdiet lorem leo a lectus.</p>
                                    <!-- /Content -->
                                    </div>
                                </div>
                                <!-- /Item Content -->
                                <!-- Margin Collum-->
                                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                                <!-- /Margin Collum-->
                                </div>
                                <!-- /SECTION ITEM -->   

                                <!-- SECTION ITEM -->
                                <div className="line row">
                                <!-- Margin Collums (necessary for the timeline effect) -->
                                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                                <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point "></div>
                                <!-- /Margin Collums -->
                                <!-- Item Content -->
                                <div className="col-md-8 content-wrap bg1">
                                    <div className="line-content">
                                    <!-- Subtitle -->
                                    <h3 className="section-item-title-1">Books</h3>
                                    <!-- /Subtitle -->
                                    <!-- content -->
                                    <p>Praesent tellus ligula, tincidunt et fringilla vel, tincidunt ut dui. 
                                    Nulla feugiat, lacus ac malesuada lobortis, elit nunc congue nunc, 
                                    vel imperdiet lorem leo a lectus.</p>
                                    <!-- /Content -->
                                    </div>
                                </div>
                                <!-- /Item Content -->
                                <!-- Margin Collum-->
                                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                                <!-- /Margin Collum-->
                                </div>
                                <!-- /SECTION ITEM --> 
                            </section>
                            <!-- ==>> /SECTION: INTERESTS -->

                            <!-- ====>> SECTION: PORTFOLIO <<====-->
                            <section className="timeline portfolio" id="portfolio">

                                <!-- VERTICAL MARGIN (necessary for the timeline effect) -->
                                <div className="line row timeline-margin">
                                <div className="content-wrap">
                                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                                    <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height"></div>
                                    <div className="col-md-9 bg1 full-height"></div>
                                </div>
                                </div>
                                <!-- /VERTICAL MARGIN -->

                                <!-- SECTION TITLE -->
                                <div className="line row">
                                <!-- Margin Collums (necessary for the timeline effect) -->
                                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                                <div className="col-md-2 timeline-progress hidden-sm hidden-xs timeline-title full-height"></div>
                                <!-- /Margin Collums -->
                                <!-- Item Content -->
                                <div className="col-md-8 content-wrap bg1">
                                    <!-- Section title -->
                                    <h2 className="section-title">Portfólio</h2>
                                    <!-- /Section title -->
                                </div>
                                <!-- Item Content -->
                                <!-- Margin Collum-->
                                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                                <!-- /Margin Collum-->
                                </div>
                                <!-- /SECTION TITLE -->

                                <!-- SECTION ITEM -->
                                <div className="line row">
                                <!-- Margin Collums (necessary for the timeline effect) -->
                                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                                <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-point "></div>
                                <!-- /Margin Collums -->
                                <!-- Item Content -->
                                <div className="col-md-8 content-wrap bg1">
                                    <div className="line-content">
                                    <!-- Subtitle -->
                                    <h3 className="section-item-title-1">Some Works</h3>
                                    <!-- /Subtitle -->
                                    <!-- content -->
                                    <div className="portfolio-itens clearfix">                      
                                        <!-- Portfolio item -->
                                        <div className="portfolio-item">
                                        <!-- Link to the item image (Put the long description on  "a" title)-->
                                        <a href="img/portfolio-item-zoom.jpg" 
                                                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie purus." 
                                                className="nivobox" data-lightbox-gallery="portfolio">
                                            <div className="hover">
                                            <p className="zoomi"><i className="fa fa-search"></i></p>
                                            <!-- Item short title -->
                                            <p className="portfolio-item-title"><strong>John"s Rex</strong><br/> Business Card</p>
                                            </div>
                                            <div className="hover-bg-wrapper">
                                            <div className="hover-bg"></div>
                                            </div>
                                            <div className="portfolio-item-thumbnail">
                                            <!-- Thumbnail of the portfolio image (400x360 for retina display) -->
                                            <img src="img/portfolio-item-thumb.jpg" alt="">
                                            </div>                        
                                        </a>
                                        </div>
                                        <!-- /Portfolio item -->  

                                        <!-- Portfolio item -->
                                        <div className="portfolio-item">
                                        <!-- Link to the item image (Put the long description on  "a" title)-->
                                        <a href="img/portfolio-item-zoom.jpg" title="Lorem ipsum dolor sit amet, 
                                                consectetur adipiscing elit. Sed molestie purus." className="nivobox"
                                                data-lightbox-gallery="portfolio">
                                            <div className="hover">
                                            <p className="zoomi"><i className="fa fa-search"></i></p>
                                            <!-- Item short title -->
                                            <p className="portfolio-item-title"><strong>John"s Rex</strong><br/> Website</p>
                                            </div>
                                            <div className="hover-bg-wrapper">
                                            <div className="hover-bg"></div>
                                            </div>
                                            <div className="portfolio-item-thumbnail">
                                            <!-- Thumbnail of the portfolio image (400x360 for retina display) -->
                                            <img src="img/portfolio-item-thumb.jpg" alt="">
                                            </div>                        
                                        </a>
                                        </div>
                                        <!-- /Portfolio item -->    

                                        <!-- Portfolio item -->
                                        <div className="portfolio-item">
                                        <!-- Link to the item image (Put the long description on  "a" title)-->
                                        <a href="img/portfolio-item-zoom.jpg" title="Lorem ipsum dolor sit amet, 
                                                consectetur adipiscing elit. Sed molestie purus." className="nivobox" 
                                                data-lightbox-gallery="portfolio">
                                            <div className="hover">
                                            <p className="zoomi"><i className="fa fa-search"></i></p>
                                            <!-- Item short title -->
                                            <p className="portfolio-item-title"><strong>Spetacular</strong><br/>Shirt Design</p>
                                            </div>
                                            <div className="hover-bg-wrapper">
                                            <div className="hover-bg"></div>
                                            </div>
                                            <div className="portfolio-item-thumbnail">
                                            <!-- Thumbnail of the portfolio image (400x360 for retina display) -->
                                            <img src="img/portfolio-item-thumb.jpg" alt="">
                                            </div>                        
                                        </a>
                                        </div>
                                        <!-- /Portfolio item -->   

                                        <!-- Portfolio item -->
                                        <div className="portfolio-item">
                                        <!-- Link to the item image (Put the long description on  "a" title)-->
                                                <a href="img/portfolio-item-zoom.jpg" title="Lorem ipsum dolor sit amet, 
                                                consectetur adipiscing elit. Sed molestie purus." className="nivobox" 
                                        data-lightbox-gallery="portfolio">
                                            <div className="hover">
                                            <p className="zoomi"><i className="fa fa-search"></i></p>
                                            <!-- Item short title -->
                                            <p className="portfolio-item-title"><strong>Mr. Chicken</strong><br/> Website</p>
                                            </div>
                                            <div className="hover-bg-wrapper">
                                            <div className="hover-bg"></div>
                                            </div>
                                            <div className="portfolio-item-thumbnail">
                                            <!-- Thumbnail of the portfolio image (400x360 for retina display) -->
                                            <img src="img/portfolio-item-thumb.jpg" alt="">
                                            </div>                        
                                        </a>
                                        </div>
                                        <!-- /Portfolio item -->  

                                        <!-- Portfolio item -->
                                        <div className="portfolio-item">
                                        <!-- Link to the item image (Put the long description on  "a" title)-->
                                            <a href="img/portfolio-item-zoom.jpg" title="Lorem ipsum dolor sit amet, 
                                            consectetur adipiscing elit. Sed molestie purus." 
                                        className="nivobox" data-lightbox-gallery="portfolio">
                                            <div className="hover">
                                            <p className="zoomi"><i className="fa fa-search"></i></p>
                                            <!-- Item short title -->
                                            <p className="portfolio-item-title"><strong>Super Lab</strong><br/> Website</p>
                                            </div>
                                            <div className="hover-bg-wrapper">
                                            <div className="hover-bg"></div>
                                            </div>
                                            <div className="portfolio-item-thumbnail">
                                            <!-- Thumbnail of the portfolio image (400x360 for retina display) -->
                                            <img src="img/portfolio-item-thumb.jpg" alt="">
                                            </div>                        
                                        </a>
                                        </div>
                                        <!-- /Portfolio item -->  

                                        <!-- Portfolio item -->
                                        <div className="portfolio-item">
                                        <!-- Link to the item image (Put the long description on  "a" title)-->
                                                <a href="img/portfolio-item-zoom.jpg" title="Lorem ipsum dolor sit amet, 
                                                consectetur adipiscing elit. Sed molestie purus." 
                                        className="nivobox" data-lightbox-gallery="portfolio">
                                            <div className="hover">
                                            <p className="zoomi"><i className="fa fa-search"></i></p>
                                            <!-- Item short title -->
                                            <p className="portfolio-item-title"><strong>Awesome</strong><br/> Branding</p>
                                            </div>
                                            <div className="hover-bg-wrapper">
                                            <div className="hover-bg"></div>
                                            </div>
                                            <div className="portfolio-item-thumbnail">
                                            <!-- Thumbnail of the portfolio image (400x360 for retina display) -->
                                            <img src="img/portfolio-item-thumb.jpg" alt="">
                                            </div>                        
                                        </a>
                                        </div>
                                        <!-- /Portfolio item -->   

                                        <!-- Portfolio item -->
                                        <div className="portfolio-item">
                                        <!-- Link to the item image (Put the long description on  "a" title)-->
                                                <a href="img/portfolio-item-zoom.jpg" title="Lorem ipsum dolor sit amet, 
                                                consectetur adipiscing elit. Sed molestie purus." 
                                        className="nivobox" data-lightbox-gallery="portfolio">
                                            <div className="hover">
                                            <p className="zoomi"><i className="fa fa-search"></i></p>
                                            <!-- Item short title -->
                                            <p className="portfolio-item-title"><strong>Petrelli's</strong><br/> Business Card</p>
                                            </div>
                                            <div className="hover-bg-wrapper">
                                            <div className="hover-bg"></div>
                                            </div>
                                            <div className="portfolio-item-thumbnail">
                                            <!-- Thumbnail of the portfolio image (400x360 for retina display) -->
                                            <img src="img/portfolio-item-thumb.jpg" alt="">
                                            </div>                        
                                        </a>
                                        </div>
                                        <!-- /Portfolio item -->   

                                        <!-- Portfolio item -->
                                        <div className="portfolio-item">
                                        <!-- Link to the item image (Put the long description on  "a" title)-->
                                                <a href="img/portfolio-item-zoom.jpg" title="Lorem ipsum dolor sit amet, 
                                                consectetur adipiscing elit. Sed molestie purus." className="nivobox" 
                                        data-lightbox-gallery="portfolio">
                                            <div className="hover">
                                            <p className="zoomi"><i className="fa fa-search"></i></p>
                                            <!-- Item short title -->
                                            <p className="portfolio-item-title"><strong>Guia D</strong><br/> App Design</p>
                                            </div>
                                            <div className="hover-bg-wrapper">
                                            <div className="hover-bg"></div>
                                            </div>
                                            <div className="portfolio-item-thumbnail">
                                            <!-- Thumbnail of the portfolio image (400x360 for retina display) -->
                                            <img src="img/portfolio-item-thumb.jpg" alt="">
                                            </div>                        
                                        </a>
                                        </div>
                                        <!-- /Portfolio item -->                    
                                    </div>
                                    <!-- /Content -->
                                    </div>
                                </div>
                                <!-- Item Content -->
                                <!-- Margin Collum-->
                                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                                <!-- /Margin Collum-->
                                </div>
                                <!-- /SECTION ITEM -->
                            </section>
                            <!-- ==>> /SECTION: PORTFOLIO -->
                            
                            <!-- ====>> SECTION: CONTACT <<====-->
                            <section className="timeline" id="contact">

                                <!-- VERTICAL MARGIN (necessary for the timeline effect) -->
                                <div className="line row timeline-margin">
                                <div className="content-wrap">
                                    <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                                    <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height"></div>
                                    <div className="col-md-9 bg1 full-height"></div>
                                </div>
                                </div>
                                <!-- /VERTICAL MARGIN -->

                                <!-- SECTION TITLE -->
                                <div className="line row">
                                <!-- Margin Collums (necessary for the timeline effect) -->
                                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                                <div className="col-md-2 timeline-progress hidden-sm hidden-xs timeline-title full-height"></div>
                                <!-- /Margin Collums -->
                                <!-- Item Content -->
                                <div className="col-md-8 content-wrap bg1">
                                    <!-- Section title -->
                                    <h2 className="section-title">Contact</h2>
                                    <!-- /Section title -->
                                </div>
                                <!-- /Item Content -->
                                <!-- Margin Collum-->
                                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                                <!-- / Margin Collum-->
                                </div>
                                <!-- /SECTION TITLE -->

                                <!-- SECTION ITEM -->
                                <div className="line row">
                                <!-- Margin Collums (necessary for the timeline effect) -->
                                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                                <div className="col-md-2 timeline-progress hidden-sm hidden-xs full-height timeline-mail "></div>
                                <!-- /Margin Collums -->
                                <!-- Item Content -->
                                <div className="col-md-8 content-wrap bg1">
                                    <div className="line-content contact-content">
                                    <!-- Subtitle -->
                                    <h3 className="section-item-title-1">Send me a message</h3>
                                    <!-- /Subtitle -->
                                    <!-- content -->
                                    <div className="row">
                                        <div className="col-md-8 contact-form-wrapper">
                                        <!-- Contact form -->
                                        <form id="contactForm" method="post" className="form" role="form">
                                            <!-- Form Field -->
                                            <div className="form-group">
                                            <input className="form-control required" id="name" name="name" placeholder="Name" type="text" required />
                                            </div>
                                            <!-- /Form Field -->
                                            <!-- Form Field -->
                                            <div className="form-group">
                                            <input className="form-control required" id="email" name="email" placeholder="Email" type="email" required />
                                            </div>
                                            <!-- /Form Field -->
                                            <!-- Form Field -->
                                            <div className="form-group">
                                            <input className="form-control required" id="subject" type="text" name="subject" placeholder="Subject" required>
                                            </div>
                                            <!-- /Form Field -->
                                            <!-- Form Field -->
                                            <div className="form-group">
                                            <textarea className="form-control required" id="message" name="message" placeholder="Message" rows="5" required></textarea>
                                            </div>
                                            <!-- /Form Field -->
                                            <!-- Form Field -->
                                            <div className="form-group">
                                            <input type="submit" className="btn btn-default form-send" value="Send!">
                                            </div>  
                                            <!-- /Form Field -->
                                        </form>
                                        <!-- /Contact Form -->     
                                        </div>
                                        <!-- Contact infos -->                 
                                        <div className="col-md-4 contact-infos">
                                        <h4 className="contact-subtitle-1">Address</h4>
                                        <p>451 Lorem Ipsum, Austin - Texas - U.S.A</p>
                                        <h4 className="contact-subtitle-1">Phone</h4>
                                        <p>+61 3 8376 6284</p>
                                        <h4 className="contact-subtitle-1">Mail</h4>
                                        <p>john.Rex@dotrex.com</p>
                                        </div>
                                        <!-- /Contact infos --> 
                                    </div>
                                    <!-- /Content -->
                                    </div>
                                </div>
                                <!-- /Item Content -->
                                <!-- Margin Collum-->
                                <div className="col-md-1 bg1 timeline-space full-height hidden-sm hidden-xs"></div>
                                <!--/ Margin Collum-->
                                </div>
                                <!-- /SECTION ITEM -->            
                            </section>
                            <!-- ==>> /SECTION: CONTACT -->
                            */}
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
  
export default PageLoader;