import React from 'react';
import Slides from './Slides';
const resumePDF = process.env.PUBLIC_URL + './gizemayazyegul_FE.pdf';


const Resume = () => {
    return (
        <section id="resume">
            <h1>Resume</h1>

            <div id="resume-wrapper">
                <div id="slides">
                    <Slides />
                </div>
                <div>
                    <h1>You can download my resume from here</h1>
                </div>
                <div>
                    <a href={resumePDF} download className="btn btn-primary">
                        Download PDF
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Resume;
