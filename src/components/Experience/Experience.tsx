import React from 'react';
import './Experience.scss';
import Resume from './resume.pdf';

const Experience: React.FunctionComponent = () => {
    return (
        <div id="experience">
            <span className="experience-header">
                <h1>Experience</h1>
                <button className='button' onClick={() => window.open(Resume, '_blank')}>
                    Click here to view my resume
                </button>
            </span>
            <div className="experience-content">
                <div className="experience-item">
                    <h2>
                        2020
                    </h2>
                    <ul>
                        <li>Automated Test Developer @<a href="https://mumvia.com/info/">Mumvia</a></li>
                        <li>Teaching Assistant @<a href="https://www.cs.tufts.edu/comp/11/">CS11</a></li>
                        <li>Residential Assistant @<a href="https://www.tufts.edu/">Tufts</a> for Carmichael Hall</li>
                        <li>Student Consultant @<a href="https://180dctufts.com/">180 Degrees Consulting</a></li>
                        <li>Consulting Intern @<a href="https://www.turnthebus.org/">Turn the Bus</a></li>
                        <li>Frontend Web Developer for @<a href="https://jumbocode.org/">Jumbocode</a></li>
                    </ul>
                </div>
                <div className="experience-item">
                    <h2>2021</h2>
                    <ul>
                        <li>Project Manager for @<a href="https://jumbocode.org/">Jumbocode</a></li>
                        <li>Team Leader for @<a href="https://180dctufts.com/">180 Degrees Consulting</a></li>
                        <li>Software Engineering Intern for @<a href="https://www.heypluto.com/">Pluto</a></li>
                        <li>Full Stack Web Developer for @<a href="https://www.inciteoffice.com/">Incite Solutions</a></li>
                        <li>Coding Assistant for @<a href="https://universitycollege.tufts.edu/high-school/programs/coding-101">Coding 101</a></li>
                        <li>Course instructor for @<a href="https://www.idtech.com/">ID Tech</a></li>
                    </ul>
                </div>
                <div className="experience-item">
                    <h2>2022</h2>
                    <ul>
                        <li>Part Time Software Engineer for @<a href="https://dce.harvard.edu/">Harvard</a></li>
                        <li>Software Engineering Intern for @<a href="https://www.redlinetrading.com/">Redline Trading Solutions</a></li>
                        <li>More to come...</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Experience;