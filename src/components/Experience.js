import React from "react";
import "../styles/Experience.css";

function Experience() {
    return (
        <div id="experience" className="experience-section">
            <div className="experience-section-container">
                <div className="internship-row">
                    <div className="service-item-row-heading">
                        INTERNSHIP
                    </div>
                    <div className="service-item-name">
                        Let's Grow More
                    </div>
                    <div className="service-item-row-content">
                        <div className="service-item-row-content-duration">
                            Sep 2022 - Oct 2022
                        </div>
                        <div className="service-item-row-main-content">
                            Completed 3 projects based on front end Development
                        </div>
                        <div className="service-item-project-links">
                            <div className="github-link"></div>
                            <div className="certificate-link"></div>
                        </div>
                    </div>
                </div>
                <div className="opensource-row">
                    <div className="service-item-row-heading">
                        OPEN-SOURCE
                    </div>
                    <div className="service-item-row-content">
                        <div className="service-item-row-content-items">
                            <div className="service-item-row-content-items-heading">
                                HACKTOBERFEST
                            </div>
                            <div className="service-item-row-content-items-duration">
                                Oct 2022 - Nov 2022
                            </div>
                            <div className="service-item-row-content-items-main-content">
                                Successfully merged 10 + Prs in Hacktoberfest by contributing in front-end based projects
                            </div>
                            <div className="service-item-project-links"></div>
                        </div>
                        <div className="service-item-row-content-items">
                            <div className="service-item-row-content-items-heading">
                                SSOC
                            </div>
                            <div className="service-item-row-content-items-duration">
                                July 2022 - Sep 2022
                            </div>
                            <div className="service-item-row-content-items-main-content">
                                Successfully merged 10 + Prs in Hacktoberfest by contributing in front-end based projects
                            </div>
                            <div className="service-item-project-links"></div>
                        </div>
                        <div className="service-item-row-content-items">
                           <div className="service-item-row-content-items-heading">
                                GSOC
                            </div>
                            <div className="service-item-row-content-items-duration">
                                March 2022 - May 2022
                            </div>
                            <div className="service-item-row-content-items-main-content">
                                Successfully merged 10 + Prs in Hacktoberfest by contributing in front-end based projects
                            </div>
                            <div className="service-item-project-links"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Experience;