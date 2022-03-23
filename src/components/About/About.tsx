import React from 'react';
import Headshot from '../../shared/images/headshot.png';

import './About.scss';

const About: React.FunctionComponent = () => {
    return (
        <div id="about">
            <h1>
                About Me
            </h1>
            <div className='about-statement'>
                <img src={Headshot} alt="Jackson Parsells headshot" />
                <span className='text-bubble'>
                    I'm a Software Engineer currently working part time to create 
                    EdTech tools for <a href="https://dce.harvard.edu/" target="_blank" rel="noopener noreferrer">Harvard University</a>, 
                    and soon to be a full time Software Engineering Intern at <a href="https://www.redlinetrading.com/" target="_blank" rel="noopener noreferrer">Redline Trading Solutions</a>.
                    I'm also a full time student at <a href="https://www.tufts.edu/" target="_blank" rel="noopener noreferrer">Tufts University</a> studying Computer Science.
                    At university, I'm a project manager for <a href="https://jumbocode.org/" target="_blank" rel="noopener noreferrer">JumboCode</a>,
                    a team leader for <a href="https://180dctufts.com/" target="_blank" rel="noopener noreferrer">180 Degrees Consulting</a>,
                    a residential assistant, and a teaching fellow for Tufts introduction to Computer Science course, <a href="https://www.cs.tufts.edu/comp/11/" target="_blank" rel="noopener noreferrer">CS11</a>.
                </span>
            </div>
        </div>
    );
};

export default About;