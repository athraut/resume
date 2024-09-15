import React, { useState } from "react";
import "./qualification.css";
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index);
    };
  
    return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button button--flex qualification__active" 
                    : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <HiOutlineAcademicCap className="qualification__icon" />
                    Education
                </div>
                <div className={toggleState === 2 ? "qualification__button button--flex qualification__active" 
                    : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <HiOutlineBriefcase className="qualification__icon" />
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active"
                    : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">   10th SSC </h3>
                            <span className="qualification__subtitle">Manibai Gujarati High School, Amravati</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2013-2019
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">12th</h3>
                            <span className="qualification__subtitle">Narsamma Heraya College, Amravati</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2019-2021
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">B.E in CSE </h3>
                            <span className="qualification__subtitle">P. R. Pote Patil College of Engineering & Management, Amravati</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2021-2025
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
                <div className={toggleState === 2 ? "qualification__content qualification__content-active"
                    : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">C/C++</h3>
                            <span className="qualification__subtitle">Programming</span>
                            {/* <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                              
                            </div> */}
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Web Developement</h3>
                            <span className="qualification__subtitle">CodeMBS</span>
                            {/* <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2015-2016
                            </div> */}
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">MERN STACK</h3>
                            <span className="qualification__subtitle">Webgurukul</span>
                            {/* <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2016-2022
                            </div> */}
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        {/* <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div> */}
                        {/* <div>
                            <h3 className="qualification__title">Senior Developer</h3>
                            <span className="qualification__subtitle">Freelance - Remote</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2019-Present
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </section> 
  );
}

export default Qualification;