import React from 'react';
import Headshot from '../../shared/images/mirror_selfie.png';

import './About.scss';

const About: React.FunctionComponent = () => {
    return (
        <div id="about">
            <h1>
                About Me
            </h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <img src={Headshot} alt="Jackson Parsells headshot" />
                    </div>
                    <div className="col-sm text-bubble">

                        I'm a Software Engineer currently working part time to create 
                        EdTech tools for <a href="https://dce.harvard.edu/" target="_blank" rel="noopener noreferrer">Harvard University</a>, 
                        and a full time Software Engineering Intern at <a href="https://www.redlinetrading.com/" target="_blank" rel="noopener noreferrer">Redline Trading Solutions</a>.
                        I'm also a full time student at <a href="https://www.tufts.edu/" target="_blank" rel="noopener noreferrer">Tufts University</a> studying Computer Science.
                        At university, I'm a former project manager for <a href="https://jumbocode.org/" target="_blank" rel="noopener noreferrer">JumboCode</a> where I'm currently the head of Project Management,
                        a team leader for <a href="https://180dctufts.com/" target="_blank" rel="noopener noreferrer">180 Degrees Consulting</a>,
                        a residential assistant, and a teaching fellow for Tufts introduction to Computer Science course, <a href="https://www.cs.tufts.edu/comp/11/" target="_blank" rel="noopener noreferrer">CS11</a>.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
