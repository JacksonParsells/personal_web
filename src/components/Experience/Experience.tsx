import React from 'react';
import Resume from './resume.pdf';

const Experience: React.FunctionComponent = () => {
    return (
        <div id="experience">
            <div className="container">
            <div className="row">
                <h1>Experience </h1>
                <button type="button" className='btn btn-primary' onClick={() => window.open(Resume, '_blank')}>
                    Click here to view my resume
                </button>
            </div>
                <div className="row">
                    <div className="col-sm">
                        <div className="card">
                        <div className="card-header">
                            2020
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Automated Test Developer @<a href="https://mumvia.com/info/">Mumvia</a></li>
                            <li className="list-group-item">Teaching Assistant @<a href="https://www.cs.tufts.edu/comp/11/">CS11</a></li>
                            <li className="list-group-item">Residential Assistant @<a href="https://www.tufts.edu/">Tufts</a> for Carmichael Hall</li>
                            <li className="list-group-item">Student Consultant @<a href="https://180dctufts.com/">180 Degrees Consulting</a></li>
                            <li className="list-group-item">Consulting Intern @<a href="https://www.turnthebus.org/">Turn the Bus</a></li>
                            <li className="list-group-item">Frontend Web Developer for @<a href="https://jumbocode.org/">Jumbocode</a></li>
                        </ul>
                    </div>
                </div>
                    <div className="col-sm">
                        <div className="card">
                        <div className="card-header">
                            2021
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Project Manager for @<a href="https://jumbocode.org/">Jumbocode</a></li>
                            <li className="list-group-item">Team Leader for @<a href="https://180dctufts.com/">180 Degrees Consulting</a></li>
                            <li className="list-group-item">Software Engineering Intern for @<a href="https://www.heypluto.com/">Pluto</a></li>
                            <li className="list-group-item">Full Stack Web Developer for @<a href="https://www.inciteoffice.com/">Incite Solutions</a></li>
                            <li className="list-group-item">Coding Assistant for @<a href="https://universitycollege.tufts.edu/high-school/programs/coding-101">Coding 101</a></li>
                            <li className="list-group-item">Course instructor for @<a href="https://www.idtech.com/">ID Tech</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm">
                        <div className="card">
                        <div className="card-header">
                            2022
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Part Time Software Engineer for @<a href="https://dce.harvard.edu/">Harvard</a></li>
                            <li className="list-group-item">Software Engineering Intern for @<a href="https://www.redlinetrading.com/">Redline Trading Solutions</a></li>
                            <li className="list-group-item">Head of Project Management @<a href="https://jumbocode.org/">Jumbocode</a></li>
                            <li className="list-group-item">And more to come!</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Experience;